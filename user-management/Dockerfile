#this is the dockerfile 

FROM node:20-alpine

# this is where the app will be stored for a better cache
WORKDIR /app

#  we copy the package json file to the WORKDIR so that we can install the dependencies. without copying the whole folder 
COPY package*.json ./

# install dependencies defined in package.json
RUN npm install

# copy the rest of the files
COPY . .

# we expose the port that the app will run on
EXPOSE 3000

# we run the app by running node app.js instead of npm start so the docker image will be smaller
CMD ["node", "app.js"]

