import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

import { pool } from '../sql/config';

export const reservasRouter = express.Router();

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
//crear nuevas peliculas requiere Token Y squema Joi
reservasRouter.post("/reserva",async (req: Request, res: Response) => {
    try {
        const newReservas = req.body;
        const result = await collections.reservas.insertOne(newReservas);
        result
            ? res.status(200).send(`Se crean reservas con id ${result.insertedId}`)
            : res.status(500).send(" Error en el servidor");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

//Actualizar peliculas por id requiere token y schema joi
reservasRouter.put("/reserva/:_id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updatedReservas = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections.reservas.updateOne(query, { $set: updatedReservas });
        result
            ? res.status(200).send(`Reserva actualizada exitosamente `)
            : res.status(304).send(`Reserva id: ${id} no actualizada`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
//Eliminar peliculas por id requiere Token
reservasRouter.delete("/reserva/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
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

