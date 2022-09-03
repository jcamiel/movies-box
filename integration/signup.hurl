# Signup, capture the csrf token
GET http://localhost:3000/signup

HTTP/* 200
[Captures]
csrf_token: xpath "string(//input[@name='_csrf']/@value)"


# Create a new user, username too short
POST http://localhost:3000/signup
[FormParams]
_csrf: {{csrf_token}}
username: bob
name: Bob
email: bob78@example.net
password: 12345678

HTTP/* 302
[Asserts]
header "Location" == "/signup"


GET http://localhost:3000/signup

HTTP/* 200
[Asserts]
xpath "string(//div[@class='errors'])" contains "Username must be 4 to 32 chars long"


# Create a new user, email already taken
POST http://localhost:3000/signup
[FormParams]
_csrf: {{csrf_token}}
username: bob33
name: Bob
email: bob78@example.net
password: 12345678

HTTP/* 302
[Asserts]
header "Location" == "/signup"


GET http://localhost:3000/signup

HTTP/* 200
[Asserts]
xpath "string(//div[@class='errors'])" contains "E-mail already in use"


# Create a user, all conditions verified
# First we obtain an available username
GET http://localhost:3000/api/available-username

HTTP/* 200
[Captures]
username: jsonpath "$.username"


POST http://localhost:3000/signup
[FormParams]
_csrf: {{csrf_token}}
username: {{username}}
name: Bob
email: {{username}}@example.net
password: 12345678

HTTP/* 302
[Asserts]
header "Location" == "/my-movies"


GET http://localhost:3000/my-movies
HTTP/* 200

# WARNING: this code doesn't work in concurents tests
# Delete the previous user using admin api
# so the server returns to a previous state where
# bob33 is not a registered user.
#DELETE http://localhost:3000/api/admin/users/bob33
#HTTP/* 200
