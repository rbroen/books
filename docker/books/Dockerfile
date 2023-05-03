FROM debian:bullseye
RUN apt-get update && apt-get install -y vim curl sudo


RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g npm@9.6.5
RUN npm install -g @angular/cli@14

RUN adduser --disabled-password --gecos "" -q books

EXPOSE 4200

USER books



