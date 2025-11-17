import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';


import eventsRouter from './routes/events.routes';
import categoriesRouter from './routes/categories.routes';
import participantsRouter from './routes/participants.routes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (_req, res) => {
  res.json({ message: 'CampusConnect API is running' });
});

app.use('/events', eventsRouter);
app.use('/categories', categoriesRouter);
app.use('/participants', participantsRouter);

export default app;
