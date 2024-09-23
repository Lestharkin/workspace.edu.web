npm init -y
npm install express
npm install typescript ts-node-dev ts-node @types/node @types/express -D
tsc --init

curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your Message"
}' http://localhost:1802/api/v1.0/contact/message/register