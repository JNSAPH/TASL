FROM node:10

#App Directory
WORKDIR /usr/src/TaslApp

# Install App Dependencies
RUN npm Install

# Bundle app source
COPY . .

# Expose Port and Command Define
EXPOSE 3010
CMD [ "node", "server.js" ]