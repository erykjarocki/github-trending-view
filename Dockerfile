FROM node:14.3.0-buster
WORKDIR app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8080
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG API_URL=api
ENV API_URL=${API_URL}
RUN npm run build:prod
CMD ["node", "server/index.js"]
