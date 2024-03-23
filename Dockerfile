FROM caddy:alpine

# Install Node.js and bun
RUN apk update && apk add --no-cache nodejs npm
RUN curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL

WORKDIR /app
COPY package*.json ./

RUN bun install
COPY . .

RUN bun run build
RUN cp -r dist/* /srv/

COPY ./Caddyfile /etc/caddy/Caddyfile