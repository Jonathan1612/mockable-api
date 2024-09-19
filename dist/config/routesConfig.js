"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routesConfig = [
    {
        method: 'GET',
        path: '/hello',
        response: { message: 'Hello, World!' },
    },
    {
        method: 'POST',
        path: '/data',
        response: { success: true, data: {} },
    },
    // Puedes agregar más rutas aquí
];
exports.default = routesConfig;
