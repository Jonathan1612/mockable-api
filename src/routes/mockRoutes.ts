import { Router } from 'express';
import routesConfig from '../config/routesConfig';

const router = Router();

// Configurar rutas dinámicamente
routesConfig.forEach(({ method, path, response }) => {
  if (method === 'GET') {
    router.get(path, (req, res) => {
      res.json(response);
    });
  } else if (method === 'POST') {
    router.post(path, (req, res) => {
      // Puedes modificar la respuesta según el cuerpo de la petición
      const modifiedResponse = { ...response, data: req.body };
      res.json(modifiedResponse);
    });
  }
  // Agrega más métodos según sea necesario
});

export default router;
