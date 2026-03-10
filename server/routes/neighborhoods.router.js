import { Router } from 'express';
import { getAllModels, getModelById } from '../controllers/utils.js';

const neighborhoodsRouter = Router();

neighborhoodsRouter.get('/', getAllModels('neighborhoods')); 
neighborhoodsRouter.get('/:id', getModelById('neighborhoods'));

export default neighborhoodsRouter;