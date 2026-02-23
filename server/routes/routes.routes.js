import { Router } from 'express';
import { getAllRoutes, createRoute, deleteRoute } from '../controllers/routes.controller.js';

const routesRouter = Router();

routesRouter.get('/', getAllRoutes);
routesRouter.post('/', createRoute);
routesRouter.delete('/:id', deleteRoute);

export default routesRouter;