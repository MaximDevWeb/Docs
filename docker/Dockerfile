FROM node:alpine as base

WORKDIR /app

COPY ./app/package.json ./
COPY .env ./
COPY app .

RUN rm -rf node_modules && npm install && npm run ui-build

CMD ["./node_modules/.bin/nodemon", "./app.js"]