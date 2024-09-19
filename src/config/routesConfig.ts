import fs from 'fs';
import path from 'path';

interface RouteConfig {
  method: string;
  path: string;
  response: any;
}

// Función para leer JSON de archivos
const readJsonFile = (filePath: string) => {
  const fullPath = path.join(__dirname, '../data', filePath);
  const jsonData = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(jsonData);
};

const routesConfig: RouteConfig[] = [
  {
    method: 'GET',
    path: '/hello',
    response: readJsonFile('hello.json'),
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

export default routesConfig;
