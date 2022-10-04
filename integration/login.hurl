# Affichage de la page de login
GET http://localhost:3000/login
HTTP/* 200


# Post du formulaire
POST http://localhost:3000/login
[FormParams]
username: fab
password: 12345678

HTTP/* 302
[Asserts]
header "Location" == "/my-movies"