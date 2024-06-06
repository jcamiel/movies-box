# Maintenant on va tester des APIs JSON
GET http://localhost:3000/api/search?q=scott
HTTP 200
[Asserts]
jsonpath "$" count == 3
jsonpath "$.[0].name" == "Blade Runner"
jsonpath "$.[0].url" == "/movies/blade-runner"
jsonpath "$.[0].director" contains "Scott"
jsonpath "$.[0].foo" not exists
jsonpath "$.[1].name" == "Legend"
