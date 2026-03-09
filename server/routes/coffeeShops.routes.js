import { Router } from 'express';
import { getAllCoffeeShops, getCoffeeShopById  } from '../controllers/coffeeShops.controller.js';

const coffeeShopsRouter = Router();

coffeeShopsRouter.get('/', getAllCoffeeShops); 
coffeeShopsRouter.get('/:id', getCoffeeShopById)

export default coffeeShopsRouter;