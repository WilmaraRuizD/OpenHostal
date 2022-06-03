import { ObjectId } from "mongodb";

export interface InterfaceReservas{
    sede:string,
    ciudad:string,
    checkin:string,
    checkout:string,
    huespedes:number,
    noches:number,
    habitacion:string,
    valorTotal:number,
}