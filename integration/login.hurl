GET http://localhost:3000
HTTP/* 200


# Try to access my movies
GET http://localhost:3000/my-movies

HTTP/* 302
[Asserts]
header "Location" == "/login"


# Login
GET http://localhost:3000/login

HTTP/* 200
[Captures]
csrf_token: xpath "string(//input[@name='_csrf']/@value)"

POST http://localhost:3000/login
[FormParams]
_csrf: {{csrf_token}}
username: bob78
password: 12345678

HTTP/* 302
[Asserts]
header "Location" == "/my-movies"


# Now access my movies
GET http://localhost:3000/my-movies

HTTP/* 200
[Asserts]
body contains "Bob"


# Logout
GET http://localhost:3000/logout

HTTP/* 302
[Asserts]
header "Location" == "/"


# Test that user is not logged
GET http://localhost:3000/my-movies

HTTP/* 302
[Asserts]
header "Location" == "/login"
