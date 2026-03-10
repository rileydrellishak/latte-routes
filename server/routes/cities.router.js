import { Router } from 'express';
import { getAllModels, getModelById } from '../controllers/utils.js';

const citiesRouter = Router();

citiesRouter.get('/', getAllModels('cities')); 
citiesRouter.get('/:id', getModelById('cities'))

export default citiesRouter;