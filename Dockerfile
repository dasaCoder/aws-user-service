# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the working directory
COPY . .

# Expose the port the app runs on
ENV PORT=3000
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
