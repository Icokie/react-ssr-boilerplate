FROM alpine:3.6

#update
RUN apk add --update nodejs

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
