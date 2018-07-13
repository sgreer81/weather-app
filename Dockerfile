FROM node:latest

COPY . .

RUN npm install

RUN npm run server:build
RUN npm run client:build

CMD [ "npm", "run", "server:production" ]