GET http://localhost:3000/api/search?q=1982

HTTP 200
[Asserts]
jsonpath "$" count == 5
jsonpath "$[0].name" == "Blade Runner"
jsonpath "$[0].director" contains "Scott"


# Test de sécurité sur les commentaires
GET http://localhost:3000/search

HTTP 200
[Asserts]
xpath "//comment()" not exists