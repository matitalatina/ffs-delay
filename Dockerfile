FROM node:boron-alpine

RUN apk add -U tzdata && \
  cp /usr/share/zoneinfo/Europe/Rome /etc/localtime && \
  mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

USER node
CMD ["node", "index.js"]
