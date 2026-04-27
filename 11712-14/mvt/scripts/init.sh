mkdir -p build src test
touch ./src/index.ts
touch .gitignore
echo "node_modules" > .gitignore
echo "build" >> .gitignore
npm init -y
npm i express 
npm i typescript tsx jest ts-jest @types/node @types/express @types/jest -D
tsc --init