module=$1
src=src
mkdir -p ./${src}/${module}/application
mkdir -p ./${src}/${module}/application/usecase
mkdir -p ./${src}/${module}/application/service

touch ./${src}/${module}/application/usecase/.gitkeep
touch ./${src}/${module}/application/service/.gitkeep

mkdir -p ./${src}/${module}/domain
mkdir -p ./${src}/${module}/domain/model
mkdir -p ./${src}/${module}/domain/port
mkdir -p ./${src}/${module}/domain/port/driver
mkdir -p ./${src}/${module}/domain/port/driver/usecase
mkdir -p ./${src}/${module}/domain/port/driver/service
mkdir -p ./${src}/${module}/domain/port/driven
mkdir -p ./${src}/${module}/domain/port/driven/adapter

touch ./${src}/${module}/domain/model/.gitkeep
touch ./${src}/${module}/domain/port/driver/usecase/.gitkeep
touch ./${src}/${module}/domain/port/driver/service/.gitkeep
touch ./${src}/${module}/domain/port/driven/adapter/.gitkeep

mkdir -p ./${src}/${module}/infrastructure
mkdir -p ./${src}/${module}/infrastructure/adapter/api
mkdir -p ./${src}/${module}/infrastructure/adapter/api/controller
mkdir -p ./${src}/${module}/infrastructure/adapter/api/middleware
mkdir -p ./${src}/${module}/infrastructure/adapter/api/router

touch ./${src}/${module}/infrastructure/adapter/api/controller/.gitkeep
touch ./${src}/${module}/infrastructure/adapter/api/middleware/.gitkeep
touch ./${src}/${module}/infrastructure/adapter/api/router/.gitkeep

src=test
mkdir -p ./${src}/${module}/application
mkdir -p ./${src}/${module}/application/usecase
mkdir -p ./${src}/${module}/application/service

touch ./${src}/${module}/application/usecase/.gitkeep
touch ./${src}/${module}/application/service/.gitkeep

mkdir -p ./${src}/${module}/domain
mkdir -p ./${src}/${module}/domain/model
mkdir -p ./${src}/${module}/domain/port
mkdir -p ./${src}/${module}/domain/port/driver
mkdir -p ./${src}/${module}/domain/port/driver/usecase
mkdir -p ./${src}/${module}/domain/port/driver/service
mkdir -p ./${src}/${module}/domain/port/driven
mkdir -p ./${src}/${module}/domain/port/driven/adapter

touch ./${src}/${module}/domain/model/.gitkeep
touch ./${src}/${module}/domain/port/driver/usecase/.gitkeep
touch ./${src}/${module}/domain/port/driver/service/.gitkeep
touch ./${src}/${module}/domain/port/driven/adapter/.gitkeep

mkdir -p ./${src}/${module}/infrastructure
mkdir -p ./${src}/${module}/infrastructure/adapter
mkdir -p ./${src}/${module}/infrastructure/adapter/api
mkdir -p ./${src}/${module}/infrastructure/adapter/api/controller
mkdir -p ./${src}/${module}/infrastructure/adapter/api/middleware
mkdir -p ./${src}/${module}/infrastructure/adapter/api/router

touch ./${src}/${module}/infrastructure/adapter/api/controller/.gitkeep
touch ./${src}/${module}/infrastructure/adapter/api/middleware/.gitkeep
touch ./${src}/${module}/infrastructure/adapter/api/router/.gitkeep

