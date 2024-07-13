# Use the official Node.js image as a base
FROM node:18 AS build

# Set the working directory for backend
WORKDIR /app/backend

# Copy backend package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source files
COPY backend/ .

# Build the backend
RUN npm run build

# Set the working directory for frontend
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source files
COPY frontend/ .

# Build the frontend
RUN npm run build

# Use a lighter image for the final stage
FROM node:18

# Set the working directory
WORKDIR /app

# Copy backend and frontend build artifacts
COPY --from=build /app/backend /app/backend
COPY --from=build /app/frontend /app/frontend

# Install the concurrently package
RUN npm install concurrently

# Copy the root package.json and install dependencies
COPY package.json ./
RUN npm install

# Expose the port that the backend server listens on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]
