curl -X POST -H "Content-Type: application/json" -d '{
  "username": "admin",
  "password": "admin"
}' http://localhost:1802/api/v1.0/users/login

curl -X POST -H "Content-Type: application/json" -d '{
  "username": "error",
  "password": ""
}' http://localhost:1802/api/v1.0/users/login

curl -X POST -H "Content-Type: application/json" -d '{
}' http://localhost:1802/api/v1.0/users/login