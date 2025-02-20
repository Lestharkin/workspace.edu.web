npm init -y
npm install express
npm install ts-node ts-node-dev typescript @types/node @types/express -D
tsc --init

mkdir -p src build test env

echo "/node_modules" > .gitignore
echo "/build" >> .gitignore

touch ./env/.env
echo "PORT=3000" > ./env/.env
echo "HOST=localhost" >> ./env/.env
echo "PROTOCOL=http" >> ./env/.env

mkdir ./src/movies
mkdir ./src/movies/domain
mkdir ./src/movies/domain/director
touch ./src/movies/domain/director/Director.ts
touch ./src/movies/domain/director/AbstractDirector.ts
touch ./src/movies/domain/director/NullDirector.ts
mkdir ./src/movies/domain/producer
touch ./src/movies/domain/producer/Producer.ts
touch ./src/movies/domain/producer/AbstractProducer.ts
touch ./src/movies/domain/producer/NullProducer.ts
mkdir ./src/movies/domain/image
touch ./src/movies/domain/image/Image.ts
touch ./src/movies/domain/image/AbstractImage.ts
touch ./src/movies/domain/image/NullImage.ts
mkdir ./src/movies/domain/character
touch ./src/movies/domain/character/Character.ts
touch ./src/movies/domain/character/AbstractCharacter.ts
touch ./src/movies/domain/character/NullCharacter.ts
mkdir ./src/movies/domain/movie
touch ./src/movies/domain/movie/Movie.ts
touch ./src/movies/domain/movie/AbstractMovie.ts
touch ./src/movies/domain/movie/NullMovie.ts
mkdir ./src/movies/domain/port
mkdir ./src/movies/domain/port/driver
touch ./src/movies/domain/port/driver/MovieUseCasePort.ts
mkdir ./src/movies/domain/port/driven
mkdir ./src/movies/domain/person
touch ./src/movies/domain/person/Person.ts
mkdir ./src/movies/application
mkdir ./src/movies/application/usecase
touch ./src/movies/application/usecase/MovieUseCase.ts
mkdir ./src/movies/application/service
mkdir ./src/movies/infrastructure
mkdir ./src/movies/infrastructure/express
mkdir ./src/movies/infrastructure/express/controller
touch ./src/movies/infrastructure/express/controller/MovieControllerExpress.ts
mkdir ./src/movies/infrastructure/express/router
touch ./src/movies/infrastructure/express/router/MovieRouterExpress.ts

mkdir ./src/express
mkdir ./src/express/domain
touch ./src/express/domain/RouterExpressInterface.ts
mkdir ./src/express/infrastructure
mkdir ./src/express/infrastructure/server
touch ./src/express/infrastructure/server/Server.ts


