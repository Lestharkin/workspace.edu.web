# para los Windows
Set-ExecutionPolicy Unrestricted
# install typesacript
npm install -g typescript
# compilar
tsc index.ts
tsc -w index.ts

tsc ./src/index.ts --target es6 --outfile ./public/js/index.js -w