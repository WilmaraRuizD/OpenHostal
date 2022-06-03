import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { mailRouter } from "./router/mail.router";
import{hostalRouter}from "./router/hotal";
import {authRouter} from "./router/ruterUsuario";
import{usersRouter}from"./router/users";
import{roomRouter} from"./router/habitacion";
import{reservaRouter} from"./router/reservas";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
dotenv.config();
const app =express();
app.use(morgan('dev'));


//Documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'API REST TYPSCRIPT', 
        description: 'Esta es la documentación de la API en typscript-postgresql con utentificacion de firebase, creada como requisito del bootcamp de backend ', 
        contact: {
            name: 'Wilmara Ruiz Diaz, Julian quintero , Felix Rodriguez', 
            email: 'wilmara_andreina93@hotmail.com'
        }, 
        servers: ['http://localhost:3040'], 
        version: '1.0'
    }
}, 
apis: [`./dist/docs/*.js`]

}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors());
app.set('port',process.env.PORT||8080);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 
app.use('/mail',mailRouter)
app.use('/usuarios',authRouter)
app.use('/api', hostalRouter)
app.use('/api',usersRouter)
app.use('/api',roomRouter)
app.use('/api',reservaRouter)
