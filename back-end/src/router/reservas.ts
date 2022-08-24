import express, { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import { createValidator } from "express-joi-validation";
import { pool } from '../sql/config';
import reservaShema from"../schemas-joi/reservas"

export const reservasRouter = express.Router();

const validator=createValidator({});

reservasRouter.use(express.json());
//visualiza todas las peliculas requier TOKEN
reservasRouter.get("/reserva",async (_req: Request, res: Response) => {
    try {
       
        const reservas = await collections.reservas.find({}).toArray();

        res.status(200).send(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

reservasRouter.get("/reserva/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const reservas = await collections.reservas.findOne(query);

        if (reservas) {
            res.status(200).send(reservas);
        }
    } catch (error) {
        res.status(404).send(`No se puede encontrar reserva: ${req.params.id}`);
    }
});
//crear nuevas reserva requiere 
reservasRouter.post('/reserva/:id',async (req, res) => {
    let cliente = await pool.connect()
    const {id} = req.params 
    console.log(id);
    try{
        let result =await cliente.query('SELECT sede , ciudad, precio FROM hostal a INNER JOIN room b ON b.id_hostal =a.id WHERE b.id=$1 GROUP BY sede,a.ciudad,precio',[id])
        if(result.rows.length > 0){
        const resultado =result.rows[0]
        const sede= resultado.sede;
        const ciudad=resultado.ciudad;
        const precio=resultado.precio
        const upload = Object.entries(req.body)
   
         const num1:any=upload[0]
         const num2:any=upload[1]
         const num3:any=upload[2]
         const num4:any=upload[3]

        const checkIn=num1[1]
        const checkOut=num2[1]
        const huespede=num3[1]
        const noche=num4[1]
        const habitacion=id
        const valorTotal=precio*noche

        const newReservas = {sede,ciudad,checkIn,checkOut,huespede,noche,habitacion,valorTotal};
        const respuesta= await collections.reservas.insertOne(newReservas);
          result
              ? res.status(200).send(`Se crean reservas con id ${respuesta.insertedId}`)
              : res.status(500).send(" Error en el servidor");
        }
       else {res.send('no exite habitación')}
    }catch(error){res.status(500).json(error.message )
    }
  }) 
//Actualizar reserva por id requiere token y schema joi
reservasRouter.put("reserva/:id", async(req:Request,res: Response) => {
    const id = req?.params?.id;
    console.log (id);
    console.log(req.body)

    try {
        const updatedReservas = req.body;
        const query = { _id: new ObjectId(id) };
        
        const result = await collections.reservas.updateOne(query, { $set: updatedReservas });

        result
            ? res.status(200).send(`Película actualizada exitosamente `)
            : res.status(304).send(`Película id: ${id} no actualizada`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});




//Eliminar reserva por id requiere Token
reservasRouter.delete("/reserva/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { id: new ObjectId(id) };
        const result = await collections.reservas.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Se elimina id ${id} correctamente`);
        } else if (!result) {
            res.status(400).send(`Fallo al eliminar ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Reservas con ID ${id} no existe`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
