# Build Frontend App

FROM node:16-alpine as build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Setup Nginx

FROM nginx:1.16.0-alpine

ARG API

ARG PORT

ENV API=$API

ENV PORT=$PORT

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/app/build /usr/share/nginx/html

RUN ls /etc/nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

RUN mv /etc/nginx/conf.d/nginx.conf /etc/nginx/conf.d/nginx.conf.tmp

COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
