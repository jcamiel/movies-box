# Favorites api is authenticated
PUT http://localhost:3000/api/favorites
{
    "selected": true,
    "movie_id": "dune-1984"
}
HTTP 401


# Create a user
# First we obtain an available username
GET http://localhost:3000/api/usernames/available
HTTP 200
[Captures]
username: jsonpath "$.username"


GET http://localhost:3000/signup
HTTP 200
[Captures]
csrf_token: xpath "string(//input[@name='_csrf']/@value)"


POST http://localhost:3000/signup
[FormParams]
_csrf: {{csrf_token}}
username: {{username}}
name: Bob
email: {{username}}@example.net
password: 12345678
HTTP 302
[Asserts]
header "Location" == "/my-movies"


GET http://localhost:3000/login
HTTP 200
[Captures]
csrf_token: xpath "string(//input[@name='_csrf']/@value)"


POST http://localhost:3000/login
[FormParams]
_csrf: {{csrf_token}}
username: {{username}}
password: 12345678
HTTP 302
[Asserts]
header "Location" == "/my-movies"


# Test that have 0 favorites yet
GET http://localhost:3000/my-movies
HTTP 200
[Asserts]
xpath "//li[@class='favorite-movie']" count == 0


# Now we can use authenticated api
PUT http://localhost:3000/api/favorites
{
    "selected": true,
    "movie_id": "dune-1984"
}
HTTP 200
[Asserts]
jsonpath "$.selected" == true


PUT http://localhost:3000/api/favorites
{
    "selected": true,
    "movie_id": "the-dark-crystal"
}
HTTP 200
[Asserts]
jsonpath "$.selected" == true


# Test that have 2 favorites movies
GET http://localhost:3000/my-movies
HTTP 200
[Asserts]
xpath "//li[@class='favorite-movie']" count == 2

# Delete one favorite

PUT http://localhost:3000/api/favorites
{
    "selected": false,
    "movie_id": "the-dark-crystal"
}
HTTP 200
[Asserts]
jsonpath "$.selected" == false


GET http://localhost:3000/my-movies
HTTP 200
[Asserts]
xpath "//li[@class='favorite-movie']" count == 1
