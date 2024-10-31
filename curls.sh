# User


curl -X GET http://localhost:3000/user/primeagen

curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{
    "username": "primeagen",
    "email": "primeagen@is.awesome",
    "password": "tokioo"
  }'

curl -X PUT http://localhost:3000/user/primeagen \
  -H "Content-Type: application/json" \
  -d '{
    "bio": "Primeagen is the best"
  }'
