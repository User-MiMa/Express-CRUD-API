FROM node:24-alpine
WORKDIR /app
COPY package*.json pnpm*.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile --prod
COPY . .
EXPOSE 5001
CMD ["node", "src/index.js"]