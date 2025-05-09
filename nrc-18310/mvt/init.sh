npm init -y
npm i typescript ts-node-dev ts-node @types/node jest @types/jest ts-jest ts-jest-mocker -D
npm i express
tsc --init


mkdir -p src build test 
mkdir -p src/inventory

touch src/BuenaVida.ts
touch src/inventory/inventory.ts
mkdir -p src/inventory/model
touch src/inventory/model/inventoryModel.ts
mkdir -p src/inventory/view
touch src/inventory/view/inventoryView.ts

mkdir -p test/inventory
touch test/inventory/inventory.test.ts
mkdir -p test/inventory/model 
touch test/inventory/model/inventoryModel.test.ts
mkdir -p test/inventory/view
touch test/inventory/view/inventoryView.test.ts