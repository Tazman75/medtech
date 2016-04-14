FROM ubuntu:14.04
MAINTAINER Tom Shepardson <tomshepardson@yahoo.com>

RUN apt-get update && apt-get install -y npm python-django python-setuptools git
RUN easy_install pip
RUN pip install django
RUN pip install djangorestframework
RUN pip install markdown
RUN pip install django-filter

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN cd && mkdir git && cd git && git clone https://github.com/Tazman75/medtech && cd medtech

#Needs to get worked out
#RUN cd /root/git/medtech && npm install
#RUN npm install webpack -g
