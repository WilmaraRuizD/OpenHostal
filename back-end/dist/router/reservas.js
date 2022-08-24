"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservasRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const express_joi_validation_1 = require("express-joi-validation");
const config_1 = require("../sql/config");
exports.reservasRouter = express_1.default.Router();
const validator = (0, express_joi_validation_1.createValidator)({});
exports.reservasRouter.use(express_1.default.json());
//visualiza todas las peliculas requier TOKEN
exports.reservasRouter.get("/reserva", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservas = yield database_service_1.collections.reservas.find({}).toArray();
        res.status(200).send(reservas);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.reservasRouter.get("/reserva/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const reservas = yield database_service_1.collections.reservas.findOne(query);
        if (reservas) {
            res.status(200).send(reservas);
        }
    }
    catch (error) {
        res.status(404).send(`No se puede encontrar reserva: ${req.params.id}`);
    }
}));
//crear nuevas reserva requiere 
exports.reservasRouter.post('/reserva/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    console.log(id);
    try {
        let result = yield cliente.query('SELECT sede , ciudad, precio FROM hostal a INNER JOIN room b ON b.id_hostal =a.id WHERE b.id=$1 GROUP BY sede,a.ciudad,precio', [id]);
        if (result.rows.length > 0) {
            const resultado = result.rows[0];
            const sede = resultado.sede;
            const ciudad = resultado.ciudad;
            const precio = resultado.precio;
            const upload = Object.entries(req.body);
            const num1 = upload[0];
            const num2 = upload[1];
            const num3 = upload[2];
            const num4 = upload[3];
            const checkIn = num1[1];
            const checkOut = num2[1];
            const huespede = num3[1];
            const noche = num4[1];
            const habitacion = id;
            const valorTotal = precio * noche;
            const newReservas = { sede, ciudad, checkIn, checkOut, huespede, noche, habitacion, valorTotal };
            const respuesta = yield database_service_1.collections.reservas.insertOne(newReservas);
            result
                ? res.status(200).send(`Se crean reservas con id ${respuesta.insertedId}`)
                : res.status(500).send(" Error en el servidor");
        }
        else {
            res.send('no exite habitación');
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}));
//Actualizar reserva por id requiere token y schema joi
exports.reservasRouter.put("reserva/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    console.log(id);
    console.log(req.body);
    try {
        const updatedReservas = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.reservas.updateOne(query, { $set: updatedReservas });
        result
            ? res.status(200).send(`Película actualizada exitosamente `)
            : res.status(304).send(`Película id: ${id} no actualizada`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//Eliminar reserva por id requiere Token
exports.reservasRouter.delete("/reserva/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.reservas.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Se elimina id ${id} correctamente`);
        }
        else if (!result) {
            res.status(400).send(`Fallo al eliminar ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`Reservas con ID ${id} no existe`);
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=reservas.js.map