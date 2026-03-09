import express from 'express';
import coffeeShopsRouter from './routes/coffeeShops.routes.js';
import cors from 'cors'

const app = express();
app.use(express.json())

const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
app.use(cors(corsOptions))
app.use('/coffee_shops', coffeeShopsRouter);

export default app;