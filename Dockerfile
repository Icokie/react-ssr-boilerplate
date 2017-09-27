FROM node:argon

#creating app dirrectory
RUN mkdir /usr/src/app 
WORKDIR /usr/src/app

#installing dependencies
COPY package.json /usr/src/app 
RUN npm install

#bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]