"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Función para leer JSON de archivos
const readJsonFile = (filePath) => {
    const fullPath = path_1.default.join(__dirname, '../data', filePath);
    const jsonData = fs_1.default.readFileSync(fullPath, 'utf8');
    return JSON.parse(jsonData);
};
const routesConfig = [
    {
        method: 'GET',
        path: '/prueba',
        response: readJsonFile('prueba.json'),
    },
    {
        method: 'POST',
        path: '/data',
        response: { success: true, data: {} },
    },
    {
        method: 'GET',
        path: '/other-data',
        response: readJsonFile('otherData.json'),
    },
    // Puedes agregar más rutas aquí
];
exports.default = routesConfig;
