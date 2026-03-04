import { Router } from 'express';
import { getAllRoutes, getRouteById, createRoute, deleteRoute } from '../controllers/routes.controller.js';

const routesRouter = Router();

routesRouter.get('/', getAllRoutes);
routesRouter.get('/:id', getRouteById)
routesRouter.post('/', createRoute);
routesRouter.delete('/:id', deleteRoute);

export default routesRouter;