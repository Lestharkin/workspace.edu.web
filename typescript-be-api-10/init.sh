# -- folder architecture
app=products
App=${app^}
mkdir src src/$app src/$app/controller src/$app/model src/$app/view test config docs build
touch ./src/$app/$app.ts
touch ./src/$app/controller/${App}Controller.ts
touch ./src/$app/model/${App}Model.tsa
touch ./src/$app/view/${App}View.ts
touch ./test/$app.test.ts

echo '# '$App > README.md
echo "/node_modules" >> .gitignore
echo 'HOST=localhost' > ./config/.env.development
echo 'PORT=1802' >> ./config/.env.development
cp ./config/.env.development ./config/.env.production
cp ./config/.env.development ./config/.env.test

# -- init tools
npm init -y
# -- install dependencies
npm i express dotenv cors morgan helmet
# -- install development dependencies
npm i typescript ts-jest @types/express @types/cors @types/morgan @types/jest ts-node-dev ts-standard jest supertest -D
tsc --init