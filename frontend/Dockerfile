FROM node:16-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY .yarnrc.yml /app
COPY .yarn /app/.yarn

RUN yarn

COPY . /app

CMD yarn build