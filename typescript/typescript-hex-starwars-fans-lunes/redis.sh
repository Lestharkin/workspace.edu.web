docker pull redis:7.2.4

docker create -p 6379:6379 --name cache \
  -e REDIS_PASSWORD=cache \
  -v redis-data:/data \
  redis:7.2.4

docker start cache