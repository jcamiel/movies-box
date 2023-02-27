# Création d'un utilisateur
# ----------------------
GET http://localhost:3000/signup

HTTP 200
[Captures]
token: xpath "string(//input[@name='_csrf']/@value)"


POST http://localhost:3000/signup
[FormParams]
username: toto
email: toto@example.net
name: SELECT *
password: 12345678
password-confirm: 12345678
_csrf: {{token}}

HTTP 302
[Asserts]
header "Location" == "/my-movies"