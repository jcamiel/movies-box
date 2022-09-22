# Login d'un utilisateur
# ----------------------
GET http://localhost:3000/login

HTTP/* 200
[Captures]
token: xpath "string(//input[@name='_csrf']/@value)"


POST http://localhost:3000/login
[FormParams]
username: fab
password: 12345678
_csrf: {{token}}

HTTP/* 302
[Asserts]
header "Location" == "/my-movies"
