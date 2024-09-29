cd myserver
docker build -t myserver .
$ docker run -d  -p 3333:7777 myserver
$ docker run -d  -p 2222:7777 myserver
$ docker run -d  -p 1111:7777 myserver
