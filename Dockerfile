# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
