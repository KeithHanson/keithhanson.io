FROM node:14.16.0-buster

RUN apt update
RUN apt install build-essential curl vim -y

COPY ./app /app

WORKDIR /app

RUN git clone https://github.com/bchiang7/v4.git

RUN npm install -g gatsby-cli

RUN yarn
