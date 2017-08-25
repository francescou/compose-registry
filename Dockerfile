FROM node:7-alpine

EXPOSE 8080
VOLUME ["/projects"]
HEALTHCHECK CMD wget -sq http://localhost:8080/api-docs || exit 1
WORKDIR /app/
CMD ["node", "index.js"]

COPY package.json .
RUN npm install
USER node
COPY . .
