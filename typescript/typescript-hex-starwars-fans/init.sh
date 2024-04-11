app=starwars
author='Lenin Javier Serrano Gil'
port=1802
host=localhost
App=${app^}
mkdir src test env build logs docs
# main
mkdir src/${app} src/${app}/shared src/${app}/helper src/${app}/util
mkdir src/${app}/application src/${app}/application/service src/${app}/application/usecase
mkdir src/${app}/domain src/${app}/domain/model src/${app}/domain/port src/${app}/domain/port/driver src/${app}/domain/port/driven
mkdir src/${app}/infrastructure src/${app}/infrastructure/config src/${app}/infrastructure/express src/${app}/infrastructure/express/controller src/${app}/infrastructure/express/route
# express
mkdir src/express src/express/config src/express/controller src/express/route
# test
mkdir test/${app} test/${app}/shared test/${app}/helper test/${app}/util
mkdir test/${app}/application test/${app}/application/service test/${app}/application/usecase
mkdir test/${app}/domain test/${app}/domain/model test/${app}/domain/port test/${app}/domain/port/driver test/${app}/domain/port/driven
mkdir test/${app}/infrastructure test/${app}/infrastructure/config test/${app}/infrastructure/express test/${app}/infrastructure/express/controller test/${app}/infrastructure/express/route
# config
echo '# '${App} > README.md
HOST='HOST='$host
PORT='PORT='$port
echo $HOST > ./env/.development.env
echo $PORT >> ./env/.development.env
cp ./env/.development.env ./env/.production.env
cp ./env/.development.env ./env/.test.env
# config express
echo "
export default {
  HOST: process.env.HOST ?? 'localhost',
  PORT: process.env.PORT ?? 1802
}
" > ./src/express/config/config.ts
# git
echo "/node_modules" >> .gitignore
echo "/build" >> .gitignore
echo "/logs" >> .gitignore
touch ./src/${app}/shared/.gitkeep 
touch ./src/${app}/helper/.gitkeep 
touch ./src/${app}/util/.gitkeep
touch ./src/${app}/application/service/.gitkeep
touch ./src/${app}/application/usecase/.gitkeep
touch ./src/${app}/domain/model/.gitkeep
touch ./src/${app}/domain/port/driver/.gitkeep
touch ./src/${app}/domain/port/driven/.gitkeep
touch ./src/${app}/infrastructure/config/config.ts
touch ./src/${app}/infrastructure/express/controller/.gitkeep
touch ./src/${app}/infrastructure/express/route/.gitkeep
touch ./src/express/controller/.gitkeep
touch ./src/express/route/.gitkeep
# source
touch ./src/${app}/${app}.ts
touch ./src/express/express.ts
# init package.json
echo  '
{
  "name": "'$app'",
  "version": "1.0.0",
  "description": "'$App'",
  "main": "./build/'$app'.js",
  "scripts": {
    "dev": "ts-node-dev --env-file=env/.development.env src/'$app'.ts",    
    "build": "rm -rf ./build && tsc",
    "lint": "ts-standard --fix",
    "start": "node --env-file=env/.production.env build/'$app'.js",
    "test": "jest --verbose"
  },
  "keywords": ["'$app'"],
  "author": "'$author'",
  "license": "ISC",  
  "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": "./node_modules/ts-standard/eslintrc.json",
    "env": {
      "jest": true
    }
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "roots": [
      "<rootDir>/test"
    ],
    "testMatch": [
      "**/test/**/*.test.ts"
    ]
  }
}
' > package.json
# install dependencies
npm i express cors morgan ejs
# install development dependencies
npm i typescript ts-node-dev ts-standard jest supertest ts-jest ts-jest-mocker @types/express @types/cors @types/morgan @types/ejs @types/jest -D
# init tsconfig.json
echo '
{
  "compilerOptions": {

    /* Language and Environment */
    "target": "ES2022",
    "lib": ["dom", "ES2022"],

    /* Modules */
    "module": "node16",                          
    "rootDir": "./",
    "moduleResolution": "node16",
    "types": ["jest", "node"],
    "resolveJsonModule": true,

    /* Emit */
    "sourceMap": true,
    "outDir": "./build",

    /* Interop Constraints */
    "esModuleInterop": true,                          
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    /* Completeness */
    "skipLibCheck": true
  },
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_modules", "env", "config", "docs", "logs", "build"]
}
' > tsconfig.json
