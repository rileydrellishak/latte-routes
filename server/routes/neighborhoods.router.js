import { Router } from 'express';
import { getAllModels, getModelById, getRelatedModels } from '../controllers/utils.js';

const neighborhoodsRouter = Router();

neighborhoodsRouter.get('/:id/coffee_shops', getRelatedModels('coffee_shops',  'neighborhood_id')); 

export default neighborhoodsRouter;