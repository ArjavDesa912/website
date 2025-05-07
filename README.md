# Praesidium Systems - AI Compliance Web Application

This is the web application for Praesidium Systems, a platform that helps organizations monitor, audit, and ensure regulatory compliance for AI models.

## Docker Setup

The application is containerized using Docker for easy deployment. Follow these steps to get started:

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1. Clone this repository to your local machine

2. Navigate to the project directory:
   ```bash
   cd praesidium-systems-web
   ```

3. Build and start the Docker container:
   ```bash
   docker-compose up -d
   ```

4. Access the web application at [http://localhost](http://localhost)

### Development

For development purposes, you can run the application without Docker:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. The app will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Project Structure

- `src/components/` - React components
- `src/utils/` - Utility functions
- `public/` - Static assets

## Docker Configuration

- `Dockerfile` - Multi-stage build for optimized production image
- `docker-compose.yml` - Docker Compose configuration
- `nginx.conf` - Nginx server configuration for serving the app
- `.dockerignore` - Files to exclude from Docker build context