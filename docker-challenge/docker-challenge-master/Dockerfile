FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first
COPY package*.json ./

# FIXED: Standard install ensures all structural tooling packages are present
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the internal port 
EXPOSE 3000

# Command to execute the app
CMD ["node", "app.js"]