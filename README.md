# cn-10-express-https

openssl genrsa -out key.pem 2048

openssl req -new -key key.pem -out csr.pem

openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

npm init -y

npm install --save express

node server.js
