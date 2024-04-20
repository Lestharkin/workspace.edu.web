app=swf-app
author='Lenin Javier Serrano Gil'
port=1802
host=localhost
App=${app^}
# main
mkdir src test env build logs docs
# express
mkdir src/express src/express/config src/express/controller src/express/route
# config
echo '# '${App^^} > README.md
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

touch ./src/express/controller/.gitkeep
touch ./src/express/route/.gitkeep
## source
touch ./src/${app}.ts
touch ./src/express/Express.ts
## init package.json
echo  '
{
  "name": "'$app'",
  "version": "1.0.0",
  "description": "'$App'",
  "main": "./build/'$app'.js",
  "scripts": {
    "dev": "ts-node-dev --env-file=env/.development.env src/'$app'.ts",    
    "build": "rm -rf ./build && tsc",
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
    "extends": ["lover"],
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
## install dependencies
npm i express cors morgan ejs
## install development dependencies
npm i typescript ts-node-dev eslint-config-lover jest supertest ts-jest ts-jest-mocker @types/express @types/cors @types/morgan @types/ejs @types/jest -D
## init tsconfig.json
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
