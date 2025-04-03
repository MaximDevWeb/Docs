import path from 'node:path';
import url from 'node:url';
import express from 'express';
import { DocsController } from '../controllers/DocsController.js';

export const createRouter = (app) => {
  const dirName = path.dirname(url.fileURLToPath(import.meta.url));
  app.use(express.static(path.join(dirName, '../../public')));

  app.get('/api/tree', (req, res) => {
    DocsController.init(req, res).getTree();
  });

  app.get('/api/docs/:page', (req, res) => {
    DocsController.init(req, res).getPage();
  });

  /** Добавляем путь для Vue **/
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(dirName, '../../public/index.html'));
  });

  /** Обработка 404 ошибки **/
  app.get(/.*/, function (req, res) {
    res.status(404).json({
      error: 404,
      message: 'Страница не найдена',
    });
  });
};
