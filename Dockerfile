FROM node:latest

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY src/ src/

CMD [ "node", "src/index.js" ]

