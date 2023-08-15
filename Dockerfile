FROM node:18-alpine3.16

WORKDIR /app

COPY . .

RUN npm install -g npm@9.8.1
RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]