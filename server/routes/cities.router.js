import { Router } from 'express';
import { getAllModels, getModelById } from '../controllers/utils.js';
import { getNeighborhoodsForCity } from '../controllers/cities.controller.js';

const citiesRouter = Router();

citiesRouter.get('/', getAllModels('cities')); 
citiesRouter.get('/:id', getModelById('cities'))
citiesRouter.get('/:id/neighborhoods', getNeighborhoodsForCity)

export default citiesRouter;