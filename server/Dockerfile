# Step 1: Use an official Node.js runtime as a base image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install 

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the port that the app runs on
EXPOSE 7777

# Step 7: Define the command to start the app
CMD ["npm", "run","start"]
