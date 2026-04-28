mkdir -p build src 
touch src/index.ts
touch .gitignore
echo "node_modules" > .gitignore
echo "build" >> .gitignore
npm init -y
npm i express ejs
npm i typescript tsx @types/node @types/express jest ts-jest ts-node @types/jest @jest/globals -D
tsc --init