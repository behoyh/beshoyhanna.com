FROM nginx:latest
# Copy the build output to replace the default nginx contents.
# be sure to replace app-name with name of your app
COPY ./dist/angular-firestore-k8s /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80