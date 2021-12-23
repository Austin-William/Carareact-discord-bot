FROM node:16.13.0
COPY package.json .
COPY package-lock.json .
COPY index.js .
COPY .env .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]