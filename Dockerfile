FROM httpd

COPY ./dist/newwebsite/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND