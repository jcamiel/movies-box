# Test de la page login avec un compte existant
GET http://localhost:3000/login
HTTP 200


# J'appuie sur le bouton login
POST http://localhost:3000/login
[FormParams]
username: fab
password: 12345678
HTTP 302
[Asserts]
header "Location" == "/my-movies"


GET http://localhost:3000/my-movies
HTTP 200

