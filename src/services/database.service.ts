import mongoDB from 'mongodb';
import dotenv from 'dotenv';
import { InterfaceReservas } from '../models/reservas';

export const collection: { reservas?: mongoDB.Collection<InterfaceReservas> } = {};

export async function connectToDatabase() {
    dotenv.config();

    const cliente = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await cliente.connect();
    const db = cliente.db(process.env.DB_NAME);
    const reservasCollection = db.collection<InterfaceReservas>(process.env.COLLECTION_NAME_RESERVA);
    collection.reservas = reservasCollection;
    console.log(
        `Connected to database ${process.env.DB_NAME} on ${process.env.DB_CONN_STRING}`
    );

    await db.command({
        collMod: process.env.COLLECTION_NAME_RESERVA,
    }).catch(async (error: mongoDB.MongoServerError) =>{
        if(error.codeName === 'NamespaceNotFound'){
            await db.createCollection(process.env.COLLECTION_NAME_RESERVA);
        }
    });
    

}