#!/bin/bash
# Create project folders
project="product-api"
Project="Product-API"
## Module folders: Hexagonal Architecture (product, user, order, or any kind of module)
module="product"
Module=${module^}
## module folders: Hexagonal Architecture (domain, app, infrastructure)
mkdir src src/$module src/$module/domain src/$module/app src/$module/infrastructure
### Domain folders: Models, ports, or any kind of domain artifact. 
mkdir src/$module/domain/model src/$module/domain/port
#### Ports folders: Driver ports, Driven ports, or any kind of domain artifact. 
mkdir src/$module/domain/port/driver src/$module/domain/port/driven
### App folders: Controllers, Use Cases, Services, or any kind of Use case artifact.
mkdir src/$module/app/usecase src/$module/app/service
### Infrastructure folders: Repositories, Frameworks, or any kind of infrastructure artifact.
mkdir src/$module/infrastructure/repository src/$module/infrastructure/framework
## Utilities folders: helpers, middlewares, or any kind of utility artifact.
mkdir src/shared src/utils logs
## Testing folders: unit, integration, e2e, or any kind of test artifact.
mkdir test test/$module test/$module/domain test/$module/app test/$module/infrastructure
### Testing app folders: Controllers, Use Cases, Services, or any kind of Use case artifact.
mkdir test/$module/app/usecase test/$module/app/service
### Testing infrastructure folders: Repositories, Frameworks, or any kind of infrastructure artifact.
mkdir test/$module/infrastructure/repository test/$module/infrastructure/framework
## Project folders: Config files, Docs files, Build files or any kind of project artifact.
mkdir config docs build
## Module files: Minimal files for each module
touch ./src/$project.ts
touch ./src/$module/domain/model/${Module}Model.ts
touch ./src/$module/domain/model/${Module}NullModel.ts
touch ./src/$module/domain/port/driver/${Module}ManagementPort.ts
touch ./src/$module/domain/port/driven/${Module}RepositoryPort.ts
touch ./src/$module/app/usecase/${Module}ManagementUseCase.ts
touch ./src/$module/app/service/${Module}ServiceUseCase.ts
## Testing module files: Minimal testing files for each module
touch ./test/$project.test.ts
touch ./test/$module/app/usecase/${Module}ManagementUseCase.test.ts
touch ./test/$module/app/service/${Module}ManagementService.test.ts
## Project files: Minimal files for config project
echo "# "$Project > README.md
echo "/node_modules" >> .gitignore
echo "HOST=localhost" > ./config/.env.development
echo "PORT=1802" >> ./config/.env.development
echo "DB_USER=user" >> ./config/.env.development
echo "DB_PASS=pass" >> ./config/.env.development
echo "DB_HOST=host" >> ./config/.env.development
echo "DB_PORT=27017" >> ./config/.env.development
echo "DB_NAME=name" >> ./config/.env.development
cp ./config/.env.development ./config/.env.production
cp ./config/.env.development ./config/.env.test
touch Dockerfile
touch Dockerfile.dev
touch docker-compose.yml
touch docker-compose.dev.yml

## init tools
npm init -y
## install dependencies
npm i express dotenv cors morgan helmet mongoose
## install development dependencies
npm i  ts-node-dev ts-standard jest supertest ts-jest ts-jest-mocker typescript @types/express @types/cors @types/morgan @types/jest -D
tsc --init