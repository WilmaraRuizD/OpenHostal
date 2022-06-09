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
