FROM tomshepardson/node
MAINTAINER Tom Shepardson <tomshepardson@yahoo.com>

RUN adduser --disabled-password --gecos '' r  && \
adduser r sudo && \
echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
su - r


USER r
WORKDIR /home/r

#RUN git clone https://github.com/CSC394-Team8/csc394 && cd csc394
RUN git clone https://github.com/CSC394-Team8/csc394 && cd csc394 && npm install; exit 0 && webpack
env PATH /home/r/csc394/node_modules/.bin:$PATH

WORKDIR /home/r/csc394
