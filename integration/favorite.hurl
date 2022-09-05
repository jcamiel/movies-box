# Favorites api is authenticated
PUT http://localhost:3000/api/favorites
{
    "selected": true,
    "movie_id": "dune-1984"
}
HTTP/* 401


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


# Now we can use authenticated api
PUT http://localhost:3000/api/favorites
{
    "selected": true,
    "movie_id": "dune-1984"
}

HTTP/* 200
[Asserts]
jsonpath "$.selected" == true