"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMock = exports.getMocks = void 0;
let mocks = [];
// Obtener mocks
const getMocks = () => {
    return mocks;
};
exports.getMocks = getMocks;
// Crear un nuevo mock
const createMock = (mockData) => {
    mocks.push(mockData);
    return mockData;
};
exports.createMock = createMock;
