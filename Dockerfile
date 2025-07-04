
FROM oven/bun:latest
LABEL org.opencontainers.image.title=www
LABEL org.opencontainers.image.source=https://github.com/dawescc/www
LABEL org.opencontainers.image.url=https://github.com/dawescc/www
LABEL org.opencontainers.image.description="Website for Ryan Dawes - https://dawes.cc"
LABEL org.opencontainers.image.licenses=MIT
LABEL org.opencontainers.image.version=0.1.2
WORKDIR /app
COPY package.json ./
RUN bun install --production
COPY src/ ./src/
EXPOSE 3000
CMD ["bun", "start"]
