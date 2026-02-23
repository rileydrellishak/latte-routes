import express from 'express';
import routesRouter from './routes/routes.routes.js';

const app = express();
app.use(express.json())
app.use('/routes', routesRouter);

export default app;