FROM node:alpine as base

WORKDIR /app

COPY ./app/package.json ./
COPY app .

RUN rm -rf node_modules && npm install && npm install -g nodemon && npm run ui-build

CMD ["nodemon", "./app.js"]