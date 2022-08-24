<<<<<<< HEAD
import * as mongoDB from "mongodb";
import reservas from "../models/reservas";
import planesTuristicos from "../models/planesTuristicos";
import restaurantes from "../models/restaurantes";
import transportes from "../models/transportes";


export const collections: { reservas ?: mongoDB.Collection<reservas> } = {};
export const collections2: { planesTuristicos ?: mongoDB.Collection<planesTuristicos> } = {};
export const collections3: { restaurantes ?: mongoDB.Collection<restaurantes> } = {};
export const collections4: { transportes ?: mongoDB.Collection<transportes> } = {};

export const connectToDatabase=async ()=> {
   
    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    // Connect to the cluster
    await client.connect();

    // Connect to the database with the name specified in .env
    const db = client.db(process.env.DB_NAME);

    const reservasCollection = db.collection<reservas>(process.env.COLLECTION_NAME_RESERVA);
    collections.reservas = reservasCollection;

    const planesTuristicosCollection = db.collection<planesTuristicos>(process.env.COLLECTION_NAME_PLANES);
    collections2.planesTuristicos = planesTuristicosCollection;

    const restaurantesCollection = db.collection<restaurantes>(process.env.COLLECTION_NAME_RESTAURANTE);
    collections3.restaurantes = restaurantesCollection;

    const transportesCollection = db.collection<transportes>(process.env.COLLECTION_NAME_TRANSPORTE);
    collections4.transportes = transportesCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${reservasCollection.collectionName}`,
    );
}
=======
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import reservas from "../models/reservas";

export const collections: { reservas ?: mongoDB.Collection<reservas> } = {};

export const connectToDatabase=async ()=> {
    // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
    dotenv.config();

    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    // Connect to the cluster
    await client.connect();

    // Connect to the database with the name specified in .env
    const db = client.db(process.env.DB_NAME);
    console.log(db)

    const reservasCollection = db.collection<reservas>(process.env.COLLECTION_NAME_RESERVA);
    collections.reservas = reservasCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${reservasCollection.collectionName}`,
    );
}
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
