# Architecture & Containerization Notes

- Base Image: node:20-alpine is used for a lightweight and fast container footprint.
- Port: The web service listens on port 3000 inside the container and maps to port 3000 on the host.
- Healthcheck: Built-in check probes /health every 30 seconds to verify container stability.
