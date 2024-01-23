# Use an official lightweight Nginx image
FROM nginx:alpine

# Create directories for your project
RUN mkdir -p /usr/share/nginx/html/

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, JS, and other files
COPY arno /usr/share/nginx/html
COPY src /usr/share/nginx/html/src

# Expose port 80
EXPOSE 80
