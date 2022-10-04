GET http://localhost:3000/api/search?q=1982

HTTP/* 200
[Asserts]
jsonpath "$" count == 5
jsonpath "$[0].name" == "Blade Runner"
jsonpath "$[0].name" contains "Runner"
jsonpath "$[0].foo" not exists
