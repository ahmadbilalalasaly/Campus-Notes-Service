# Campus-Notes-Service

A lightweight RESTful web service and interactive dashboard for managing university course notes and tasks, containerized with Docker.

## Project Structure

- `src/` - Node.js & Express backend + HTML/CSS frontend
- `docs/` - Documentation and verification screenshots
- `Dockerfile` - Container build instructions

## Build & Run with Docker

1. Build the Docker image:
   `docker build -t campus-notes-service:v1 .`

2. Run the container:
   `docker run -d -p 3000:3000 --name campus-notes-app campus-notes-service:v1`

3. Verify the running container:
   `docker ps`
   `curl http://localhost:3000/health`

4. Open in browser:
   `http://localhost:3000`
