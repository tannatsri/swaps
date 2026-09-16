# ── Build stage (none needed — pure static site) ──────────────────────────────
# Use a lightweight nginx image to serve the static files

FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy project files into the nginx serve directory
COPY index.html  /usr/share/nginx/html/
COPY style.css   /usr/share/nginx/html/
COPY script.js   /usr/share/nginx/html/

# If you have an assets folder (photos, audio), uncomment the next line:
# COPY assets/   /usr/share/nginx/html/assets/

# Copy custom nginx config (gzip + correct MIME types + SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
