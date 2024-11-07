FROM node:20
WORKDIR /app
COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install db-migrate-mysql --legacy-peer-deps
COPY . .

# This is our secret sauce
RUN git clone https://github.com/vishnubob/wait-for-it.git