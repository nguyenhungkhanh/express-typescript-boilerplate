FROM node:10.17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

