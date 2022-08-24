FROM node:16.15.0
<<<<<<< HEAD
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/app
COPY package*.json ./
RUN npm  install --only=prod
=======
WORKDIR /app
COPY package*.json ./
RUN npm  install
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
COPY . . 

#EXPOSE 3015
CMD ["npm","start"]