"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const database_service_1 = require("./services/database.service");
const mail_router_1 = require("./router/mail.router");
const hotal_1 = require("./router/hotal");
const codigoSengrid_1 = require("./router/codigoSengrid");
const reservas_1 = require("./router/reservas");
const planesTuristicos_1 = require("./router/planesTuristicos");
const restaurantes_1 = require("./router/restaurantes");
const transportes_1 = require("./router/transportes");
const users_1 = require("./router/users");
const habitacion_1 = require("./router/habitacion");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
//Documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API REST TYPSCRIPT',
            description: 'Esta es la documentación de la API en typscript-postgresql con utentificacion de firebase, creada como requisito del bootcamp de backend ',
            contact: {
                name: 'Wilmara Ruiz Diaz, Julian quintero ',
                email: 'wilmara_andreina93@hotmail.com'
            },
            servers: ['http://localhost:3040'],
            version: '1.0'
        }
    },
    apis: [`./dist/docs/*.js`]
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use((0, cors_1.default)());
app.set('port', process.env.PORT || 8080);
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use('/mail', mail_router_1.mailRouter);
    app.use('/api', codigoSengrid_1.codigoRouter);
    app.use('/api', hotal_1.hostalRouter);
    app.use('/api', users_1.usersRouter);
    app.use('/api', habitacion_1.roomRouter);
    app.use('/api', reservas_1.reservasRouter);
    app.use('/api', planesTuristicos_1.planesRouter);
    app.use('/api', restaurantes_1.restauranteRouter);
    app.use('/api', transportes_1.transporteRouter);
    app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });
}).catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map