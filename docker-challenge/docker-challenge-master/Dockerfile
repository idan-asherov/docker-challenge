FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first to leverage Docker cache layers
COPY package*.json ./

# Install dependencies (production-only to keep the image small)
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the internal port your Express server listens on
EXPOSE 3000

# FIXED: We use "node app.js" directly to avoid nodemon overhead in containers
CMD ["node", "app.js"]