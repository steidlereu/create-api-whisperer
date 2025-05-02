FROM bitnami/nginx:latest

# Set a non-root user for security
USER 1001

# Copy Angular app to NGINX html directory
COPY app /app

# Update NGINX configuration to serve Angular app
COPY docker/nginx.conf /opt/bitnami/nginx/conf/server_blocks/default.conf

# Expose port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
