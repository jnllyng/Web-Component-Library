# Build the React application
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /yang_jueun_ui_garden

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build production
RUN npm run build

# Serve production build using Nginx
FROM nginx:alpine

# Required working directory name
WORKDIR /yang_jueun_ui_garden

# Copy production build output into nginx html directory
COPY --from=build /yang_jueun_ui_garden/build /usr/share/nginx/html

# Expose port 80 inside container
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]