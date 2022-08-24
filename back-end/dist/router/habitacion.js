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
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../sql/config");
exports.roomRouter = express_1.default.Router();
const configcloud_1 = require("../utilities/configcloud");
const configcloud_2 = require("../utilities/configcloud");
const configMulter_1 = require("../utilities/configMulter");
const token_1 = require("../firebase/token");
exports.roomRouter.use(express_1.default.json());
exports.roomRouter.get("/room", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    try {
        let result = yield cliente.query("SELECT * FROM room");
        res.json(result.rows);
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: "Internal error server" });
    }
}));
exports.roomRouter.get("/room/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        let result = yield cliente.query(`SELECT * FROM room WHERE id = $1`, [id]);
        if (result.rows.length > 0) {
            res.json(result.rows);
        }
        else {
            res.send("NO EXISTE Habitación");
        }
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: "Internal error server" });
    }
}));
///se filtra por id de hostal
exports.roomRouter.get("/room/hostal/:id_hostal", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id_hostal } = req.params;
    try {
        let result = yield cliente.query(`SELECT * FROM room WHERE id_hostal = $1`, [id_hostal]);
        if (result.rows.length > 0) {
            res.json(result.rows);
        }
        else {
            res.send("No existe hostal con ID");
        }
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: "Internal error server" });
    }
}));
exports.roomRouter.get("/roomestado/:estado", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { estado } = req.params;
    try {
        let result = yield cliente.query(`SELECT * FROM hostal a INNER JOIN room b ON b.id_hostal =a.id WHERE b.estado =$1`, [estado]);
        if (result.rows.length > 0) {
            res.json(result.rows);
        }
        else {
            res.send("NO EXISTE Habitación");
        }
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: "Internal error server" });
    }
}));
exports.roomRouter.post("/room", configMulter_1.uploadFile, token_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.send("El campo foto no puede ser null");
    }
    const originalname = req.file.originalname;
    let foto = `${configcloud_1.GOOGLE_CLOUD_BUCKET}/${originalname}`;
    try {
        const { tipo, descripcion, estado, capacidad, servicios, precio, imagenes, id_hostal, } = req.body;
        const cliente = yield config_1.pool.connect();
        const response = yield cliente.query(`INSERT INTO room(tipo,descripcion,foto,estado,capacidad,servicios,precio,imagenes,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)RETURNING id`, [
            tipo,
            descripcion,
            foto,
            estado,
            capacidad,
            servicios,
            precio,
            imagenes,
            id_hostal,
        ]);
        if (response.rowCount > 0) {
            res.send("Se crea habitacion correctamente");
            (0, configcloud_2.uploadFileGoogle)(originalname).catch(console.error);
        }
        else {
            res.json({ message: "No se pudo crear el habitacion" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal error server" });
    }
}));
exports.roomRouter.put("/room/:id", token_1.decodeToken, configMulter_1.uploadFile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.send("El campo foto no puede ser null");
    }
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    const originalname = req.file.originalname;
    const foto = `${configcloud_1.GOOGLE_CLOUD_BUCKET}/${originalname}`;
    console.log(foto);
    console.log(`dist/src/public/uploads/${originalname}`);
    const { tipo, descripcion, estado, capacidad, servicios, precio, imagenes, id_hostal, } = req.body;
    try {
        const result = yield cliente.query(`UPDATE room SET tipo = $1, descripcion=$2,foto = $3,estado=$4,capacidad=$5,servicios=$6,precio=$7, imagenes=$8,id_hostal=$9 WHERE id =$10`, [
            tipo,
            descripcion,
            foto,
            estado,
            capacidad,
            servicios,
            precio,
            imagenes,
            id_hostal,
            id,
        ]);
        if (result.rowCount > 0) {
            res.json({ message: "Actualización realizada correctamente" });
        }
        else {
            res
                .status(503)
                .json({ message: "Ocurrio un envento inesperado, intente de nuevo" });
        }
        (0, configcloud_2.uploadFileGoogle)(originalname).catch(console.error);
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: "Internal error server" });
    }
}));
exports.roomRouter.delete("/room/:id", token_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        const result = yield cliente.query(`DELETE FROM room WHERE id = $1`, [id]);
        if (result.rowCount > 0) {
            res.send("Se eliminado habitacion de manera exitosa");
        }
        else {
            res.status(409).json({ message: "Error en dato enviado" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Error server" });
    }
}));
//# sourceMappingURL=habitacion.js.map