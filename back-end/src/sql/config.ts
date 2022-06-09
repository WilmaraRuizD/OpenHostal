import { Pool } from "pg";

export const pool = new Pool({
 user:'postgres',
 host:'localhost',
 password:'12345',
 database:'openhostel',
 port:5432
});