FROM caddy:alpine

# Install Node.js and bun
RUN apk update && apk add --no-cache nodejs npm unzip ca-certificates wget

RUN wget https://raw.githubusercontent.com/athalonis/docker-alpine-rpi-glibc-builder/master/glibc-2.26-r1.apk
RUN apk add --allow-untrusted --force-overwrite glibc-2.26-r1.apk
RUN rm glibc-2.26-r1.apk

RUN npm install -g bun

WORKDIR /app
COPY package*.json ./

RUN bun install
COPY . .

RUN bun run build
RUN cp -r dist/* /srv/

COPY ./Caddyfile /etc/caddy/Caddyfile