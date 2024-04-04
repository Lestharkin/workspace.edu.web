app=movie
port=1802
host=localhost
App=${app^}
mkdir src src/view src/model src/template src/public src/router src/config test test/view test/model test/router env docs build
## source
touch ./src/${app}.ts
## view
echo "
import { Request, Response } from 'express'
import ${App}Model from '../model/${App}Model'

export default class ${App}View {
  constructor (private readonly ${app}Model: ${App}Model) { }
}
" > ./src/view/${App}View.ts
## model
echo "
export default class ${App}Model {
  constructor () { }

  index = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ message: 'Hello ${App}s' })
  }
}
" > ./src/model/${App}Model.ts
## router
echo "
import { Router } from 'express'
import ${App}View from '../view/${App}View'

export default class ${App}sRouter {
  router: Router

  constructor (private readonly ${app}View: ${App}View) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.${app}View.index.bind(this.${app}View.index))
  }
}
" > ./src/router/${App}Router.ts
touch ./src/template/${App}Template.ejs
echo "
export default {
  HOST: process.env.HOST ?? 'localhost',
  PORT: process.env.PORT ?? 1802
}
" > ./src/config/${App}Config.ts
## test
touch ./test/${app}.test.ts
touch ./test/view/${App}View.test.ts
touch ./test/model/${App}Model.test.ts
touch ./test/router/${App}Router.ts
# # config
echo '# '${App} > README.md
echo "/node_modules" >> .gitignore
echo "/build" >> .gitignore
HOST='HOST='$host
PORT='PORT='$port
echo $HOST > ./env/.development.env
echo $PORT >> ./env/.development.env
cp ./env/.development.env ./env/.production.env
cp ./env/.development.env ./env/.test.env

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
    "lint": "ts-standard --fix",
    "start": "node --env-file=env/.production.env build/'$app'.js",
    "test": "jest --verbose"
  },
  "keywords": ["'$app'"],
  "author": "",
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
## install dependencies
npm i express cors morgan ejs
## install development dependencies
npm i typescript ts-node-dev ts-standard jest ts-jest @types/express @types/cors @types/morgan @types/ejs @types/jest -D
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
  "exclude": ["node_modules", "config", "docs", "logs", "build"]
}
' > tsconfig.json
