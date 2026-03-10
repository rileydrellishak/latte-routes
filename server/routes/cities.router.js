import { Router } from 'express';
import { getAllModels, getModelById, getRelatedModels } from '../controllers/utils.js';

const citiesRouter = Router();

citiesRouter.get('/', getAllModels('cities')); 
citiesRouter.get('/:id', getModelById('cities'))
citiesRouter.get('/:id/neighborhoods', getRelatedModels('neighborhoods', 'city_id'))

export default citiesRouter;