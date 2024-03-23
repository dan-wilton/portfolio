FROM caddy:alpine

# Install Node.js and bun
RUN apk update && apk add --no-cache nodejs npm
RUN npm install -g bun # the last `npm` command you'll ever need

WORKDIR /app
COPY package*.json ./

RUN bun install
COPY . .

RUN bun run build
RUN cp -r dist/* /srv/

COPY ./Caddyfile /etc/caddy/Caddyfile