# Affichage de la home
# ----------------------
GET http://localhost:3000
[Options]
verbose: false

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "string(//title)" startsWith "Movies"
xpath "//div[@class='home-movies']" count == 2
header "X-Powered-By" not exists
cookie "connect.sid" not exists
cookie "x-session-id" exists
cookie "x-session-id[SameSite]" == "Strict"


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