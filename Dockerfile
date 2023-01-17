FROM node:14-alpine AS build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "run", "start"]
FROM nginx:1.17.1-alpine
COPY --from=build /app/build /usr/share/nginx/html