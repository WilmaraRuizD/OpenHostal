<<<<<<< HEAD
import { Pool } from "pg";
import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.PASS_DB)

export const pool = new Pool({
  
    host:process.env.HOST_DB, 
    user:process.env.USER_DB, 
    password:process.env.PASS_DB, 
    database:process.env.DATABASE,
     max: 20, 
    // Número de milisegundos que un cliente debe permanecer inactivo en el pool y no ser comprobado
    // antes de ser desconectado del backend y descartado
    // por defecto es 10000 (10 segundos) - se ajusta a 0 para desactivar la desconexión automática de los clientes inactivos
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

module.exports = { pool }

=======
import { Pool } from "pg";

export const pool = new Pool({
 user:'postgres',
 host:'localhost',
 password:'12345',
 database:'openhostel',
 port:5432
});
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
