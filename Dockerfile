
FROM oven/bun:latest
LABEL org.opencontainers.image.source=https://github.com/dawescc/www
WORKDIR /app
COPY package.json ./
RUN bun install --production
COPY src/ ./src/
EXPOSE 3000
CMD ["bun", "start"]
