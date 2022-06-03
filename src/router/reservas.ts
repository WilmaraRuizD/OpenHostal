import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collection } from "../services/database.service";

export const reservaRouter = express.Router();

reservaRouter.use(express.json());

reservaRouter.get("/reservas", async (req:Request, res:Response) => {
    try{
        const reservas = await collection.reservas.find().toArray();
        res.status(200).json(reservas);
    }catch{
        res.status(500).json({ error: 'Internal error server' });
    }
});

reservaRouter.get("/reserva:id", async (req:Request, res:Response) => {
    try {
        const id = req?.params?.id;
        const reserva = await collection.reservas.findOne({ _id: new ObjectId(id) });
        if (reserva) {
            res.status(200).json(reserva);
        } else {
            res.status(404).json({ message: 'Reserva not found' });
        }
    } catch (error) {
        res.status(500).send(`Unable to find matching the reserva with the id: ${req.params.id}`);
    }
        
});

reservaRouter.post("/reserva", async (req:Request, res:Response) => {
    try {
        const reserva = req.body;
        const result = await collection.reservas.insertOne(reserva);
        const newReserva = await collection.reservas.findOne({ _id: result.insertedId });
        res.status(201).json(newReserva);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

reservaRouter.put("/reserva:id", async (req:Request, res:Response) => {
    try {
        const id = req?.params?.id;
        const UpdateReserva = req.body;
        const result = await collection.reservas.updateOne({ _id: new ObjectId(id) }, { $set: UpdateReserva });
        result
            ? res.status(200).json({ message: 'Reserva updated' })
            : res.status(304).json({ message: `Reserva with id: ${id} not updated` });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

reservaRouter.delete("/reserva:id", async (req:Request, res:Response) => {
    try {
        const id = req?.params?.id;
        const result = await collection.reservas.deleteOne({ _id: new ObjectId(id) });
        if(result && result.deletedCount){
            res.status(200).json({ message: `Reserva with id: ${id} deleted` });
        }else if(!result){
            res.status(400).json({ message: `Reserva with id: ${id} not found` });
        }else if (!result.deletedCount){
            res.status(404).json({ message: `Reserva with id: ${id} does not exist` });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
        
})

