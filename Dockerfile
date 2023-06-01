FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY *.config.js ./
COPY *.config.ts ./

RUN yarn

COPY ./src ./src
COPY ./static ./static
COPY ./.env ./.env

RUN yarn check

RUN yarn build

EXPOSE 3000

ENV HOST=0.0.0.0

CMD ["yarn", "start"]
