import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan"
import { mailRouter } from "./router/mail.router";
import{hotalRouter}from "./router/hotal";
import {authRouter} from "./router/ruterUsuario";
import{usersRouter}from"./router/users"
import{roomRouter} from"./router/habitacion"

dotenv.config();
const app =express();
app.use(morgan('dev'));
app.set('port',process.env.PORT||8080);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 
app.use('/mail',mailRouter)
app.use('/usuarios',authRouter)
app.use('/api', hotalRouter)
app.use('/api',usersRouter)
app.use('/api',roomRouter)
