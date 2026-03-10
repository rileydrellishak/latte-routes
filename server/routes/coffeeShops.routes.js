import { Router } from 'express';
import { getAllModels, getModelById } from '../controllers/utils.js';


const coffeeShopsRouter = Router();

coffeeShopsRouter.get('/', getAllModels('coffee_shops')); 
coffeeShopsRouter.get('/:id', getModelById('coffee_shops'))

export default coffeeShopsRouter;