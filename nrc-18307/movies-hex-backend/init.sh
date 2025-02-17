npm init -y
npm install express
npm install ts-node ts-node-dev typescript @types/node @types/express -D

tsc --init

mkdir -p src build test database env

mkdir -p ./src/domain
mkdir -p ./src/application
mkdir -p ./src/infrastructure

mkdir -p ./src/domain/movie
touch ./src/domain/movie/Movie.ts
touch ./src/domain/movie/NullMovie.ts
touch ./src/domain/movie/AbstractMovie.ts
mkdir -p ./src/domain/director
touch ./src/domain/director/AbstractDirector.ts
touch ./src/domain/director/Director.ts
touch ./src/domain/director/NullDirector.ts
mkdir -p ./src/domain/producer
touch ./src/domain/producer/AbstractProducer.ts
touch ./src/domain/producer/Producer.ts
touch ./src/domain/producer/NullProducer.ts
mkdir -p ./src/domain/imagen
touch ./src/domain/imagen/AbstractImagen.ts
touch ./src/domain/imagen/Imagen.ts
touch ./src/domain/imagen/NullImagen.ts
mkdir -p ./src/domain/character
touch ./src/domain/character/AbstractCharacter.ts
touch ./src/domain/character/Character.ts
touch ./src/domain/character/NullCharacter.ts
mkdir -p ./src/domain/port
mkdir -p ./src/domain/port/driver
touch ./src/domain/port/driver/MovieUseCasePort.ts
mkdir -p ./src/domain/port/driven
mkdir -p ./src/domain/person
touch ./src/domain/person/Person.ts
mkdir -p ./src/domain/express
touch ./src/domain/express/MovieRouterExpressInterface.ts
touch ./src/domain/express/MovieControllerExpressInterface.ts

mkdir -p ./src/application/usecase
touch ./src/application/usecase/MovieUseCase.ts
mkdir -p ./src/application/service

mkdir -p ./src/infrastructure/express
touch ./src/infrastructure/express/ServerExpress.ts
mkdir -p ./src/infrastructure/express/controller
touch ./src/infrastructure/express/controller/MovieControllerExpress.ts
mkdir -p ./src/infrastructure/express/router
touch ./src/infrastructure/express/router/MovieRouterExpress.ts




