GET http://localhost:3000/api/search
HTTP/* 400

GET http://localhost:3000/api/search
[QueryStringParams]
q: 1982

HTTP/* 200
[Asserts]
jsonpath "$" count == 4


GET http://localhost:3000/api/search
[QueryStringParams]
q: sean young

HTTP/* 200
[Asserts]
jsonpath "$" count == 2