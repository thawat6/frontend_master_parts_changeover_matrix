# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install yarn
RUN yarn install 
COPY . .
RUN yarn build