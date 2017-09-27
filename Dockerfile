FROM alpine:3.6

#update
RUN apk add --update nodejs

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
