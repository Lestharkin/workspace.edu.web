# folder architecture
app=products
App=${app^}
mkdir src src/$app src/$app/view src/$app/model src/$app/template src/$app/public src/$app/router test config docs build
## source
touch ./src/$app/$app.ts
touch ./src/$app/view/${App}View.ts
touch ./src/$app/model/${App}Model.ts
touch ./src/$app/router/${App}Router.ts
touch ./src/$app/template/${App}Template.ejs
## test
touch ./test/$app/$app.test.ts
touch ./test/$app/view/${App}View.test.ts
touch ./test/$app/model/${App}Model.test.ts
# # config
echo '# '$App > README.md
echo "/node_modules" >> .gitignore
echo 'HOST=localhost' > ./config/.env.development
echo 'PORT=1802' >> ./config/.env.development
cp ./config/.env.development ./config/.env.production
cp ./config/.env.development ./config/.env.test

## init tools
npm init -y
## install dependencies
npm i express dotenv cors morgan helmet ejs
## install development dependencies
npm i typescript ts-jest @types/express @types/cors @types/morgan @types/ejs @types/jest ts-node-dev ts-standard jest supertest -D
tsc --init