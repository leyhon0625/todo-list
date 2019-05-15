FROM nginx:latest
LABEL maintainer "oofbird.net <iju707@gmail.com>"

COPY ./build /usr/share/nginx/html