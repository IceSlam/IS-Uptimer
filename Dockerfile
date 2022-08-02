FROM node:16.15.0-alpine3.15

ENV APP_ROOT /
ENV NODE_ENV production
ENV APP_PORT 61251

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

RUN npm install

CMD ["node", "./monitor.js"]

