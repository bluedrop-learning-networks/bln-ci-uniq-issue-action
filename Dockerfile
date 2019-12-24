FROM node:12-alpine

COPY package*.json ./

RUN \
  npm i

COPY . .

ENTRYPOINT ["node", "/src/index.js"]