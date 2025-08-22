npm init -y
npm i express cors morgan helmet
npm i typescript ts-node ts-node-dev @types/node @types/express @types/cors @types/morgan @types/helmet -D
npm i jest @types/jest ts-jest ts-jest-mock -D
tsc --init

mkdir -p src test env build

touch .gitignore
echo "/node_modules" >> .gitignore

touch ./env/.env.json
echo "{
  \"HOST\": \"localhost\",
  \"PORT\": 1802,
  \"NODE_ENV\": \"development\"
}" >> ./env/.env.json

