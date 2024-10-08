FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Para desenvolvimento, utilize o watch mode do NestJS
CMD ["npm", "run", "start:dev"]
