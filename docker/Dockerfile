FROM node:alpine as base

WORKDIR /app

COPY ./app/package.json ./
RUN rm -rf node_modules && npm install && npm install -g nodemon

COPY ./app .
COPY .env ./private/ui
RUN npm run ui-build

CMD ["nodemon", "./app.js"]