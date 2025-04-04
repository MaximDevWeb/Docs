import express from 'express';
import 'dotenv/config.js';
import { createRouter } from '../routes/index.js';
import cors from 'cors';

export const createApp = () => {
  const app = express();
  const port = process.env.DOCKER_PORT || 3000;

  app.use(cors());

  createRouter(app);

  app.listen(port, () => {
    console.log(`Сервер запущен на порте: ${port}`);
  });
};
