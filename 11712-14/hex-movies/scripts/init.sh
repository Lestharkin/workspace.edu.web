npm init -y 
npm install express
npm install typescript tsx @types/node @types/express -D
tsc --init


mkdir -p src docs env build public

mkdir -p ./src/api
mkdir -p ./src/api/domain ./src/api/application ./src/api/infrastructure
mkdir -p ./src/api/domain/model
mkdir -p ./src/api/domain/port ./src/api/domain/port/driver ./src/api/domain/port/driven
mkdir -p ./src/api/application/usecase ./src/api/application/service ./src/api/infrastructure/adapter


mkdir -p ./src/movies
mkdir -p ./src/movies/domain ./src/movies/application ./src/movies/infrastructure
mkdir -p ./src/movies/domain/model
mkdir -p ./src/movies/domain/port ./src/movies/domain/port/driver ./src/movies/domain/port/driven
mkdir -p ./src/movies/application/usecase ./src/movies/application/service ./src/movies/infrastructure/adapter