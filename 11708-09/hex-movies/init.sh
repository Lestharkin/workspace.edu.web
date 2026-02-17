npm init -y
npm i tsx typescript @types/node @types/express  -D
npm i express 
tsc --init

mkdir -p src build docs env scripts


# Movies

mkdir -p ./src/movies
mkdir -p ./src/movies/domain
mkdir -p ./src/movies/domain/model
mkdir -p ./src/movies/domain/port
mkdir -p ./src/movies/domain/port/driver
mkdir -p ./src/movies/domain/port/driven

mkdir -p ./src/movies/application
mkdir -p ./src/movies/application/usecase
mkdir -p ./src/movies/application/service

mkdir -p ./src/movies/infrastructure
mkdir -p ./src/movies/infrastructure/adapter

# API

mkdir -p ./src/api
mkdir -p ./src/api/domain
mkdir -p ./src/api/domain/model
mkdir -p ./src/api/domain/port
mkdir -p ./src/api/domain/port/driver
mkdir -p ./src/api/domain/port/driven

mkdir -p ./src/api/application
mkdir -p ./src/api/application/usecase
mkdir -p ./src/api/application/service

mkdir -p ./src/api/infrastructure
mkdir -p ./src/api/infrastructure/adapter

