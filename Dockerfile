# # Use the official Node.js image as the base image for the builder stage
# FROM node:alpine AS builder
# # Install the Angular CLI globally
# RUN npm install -g @angular/cli

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the entire project to the container
# COPY . .

# # Build the Angular app for production
# RUN ng build simple-resume

# # Use a smaller, production-ready image as the final image
# FROM nginx:alpine

# # Copy the production-ready Angular app to the Nginx webserver's root directory
# COPY --from=builder /app/dist/simple-resume /usr/share/nginx/html

# # Expose port 80
# EXPOSE 4201

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build simple-resume --output-hashing=none 

FROM nginx:alpine

COPY --from=node /app/dist/simple-resume /usr/share/nginx/html 