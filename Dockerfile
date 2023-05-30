FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

RUN yarn check

RUN yarn build

CMD ["yarn", "start"]
