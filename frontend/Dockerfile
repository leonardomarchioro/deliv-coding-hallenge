FROM node

# set working directory
WORKDIR /client

# install client dependencies
COPY package*.json ./

RUN yarn install 

EXPOSE 3000

# start client
CMD ["yarn", "start"]