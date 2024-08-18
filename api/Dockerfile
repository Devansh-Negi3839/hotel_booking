FROM node:latest
WORKDIR /app
RUN npm i -g nodemon
COPY package.json .
RUN npm i
COPY . . 
EXPOSE 8800
CMD [ "npm", "run", "start" ]