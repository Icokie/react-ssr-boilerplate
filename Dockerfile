FROM node:argon

#creating app dirrectory
RUN mkdir /app 
WORKDIR /app

#installing dependencies
COPY package.json /app 
RUN npm install

#bundle app source
COPY . /app

EXPOSE 8080
CMD [ "npm", "start" ]
