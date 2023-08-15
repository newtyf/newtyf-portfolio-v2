FROM node:18-alpine3.18

WORKDIR /app

COPY . .

RUN npm cache clean --force
RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]