# Step 1: Use official Node.js image as a base image
FROM node:16-alpine

# Step 2: Set the working directory to /app inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Step 4: Install the dependencies from the package.json
RUN npm install

# Step 5: Copy the rest of the app files into the container
COPY . .

# Step 6: Expose port 3000 to allow access to the app from the outside
EXPOSE 3000

# Step 7: Set the default command to run when the container starts
CMD ["npm", "run", "dev"]
