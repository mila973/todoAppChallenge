## Pull the mysql:5.7 image
FROM mysql:5.7

## The maintainer name and email
MAINTAINER Lukas Milasauskas <lukas@milasauskas.com>

# database = test and password for root = password
ENV MYSQL_DATABASE=test1 \
    MYSQL_ROOT_PASSWORD=password

# when container will be started, we'll have `test` database created with this schema
COPY ./test1.sql /docker-entrypoint-initdb.d/
