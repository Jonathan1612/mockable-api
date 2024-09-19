"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesConfig_1 = __importDefault(require("../config/routesConfig"));
const router = (0, express_1.Router)();
// Configurar rutas dinámicamente
routesConfig_1.default.forEach(({ method, path, response }) => {
    if (method === 'GET') {
        router.get(path, (req, res) => {
            res.json(response);
        });
    }
    else if (method === 'POST') {
        router.post(path, (req, res) => {
            // Puedes modificar la respuesta según el cuerpo de la petición
            const modifiedResponse = Object.assign(Object.assign({}, response), { data: req.body });
            res.json(modifiedResponse);
        });
    }
    // Agrega más métodos según sea necesario
});
exports.default = router;
