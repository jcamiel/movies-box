GET http://localhost:3000/movies/dune-1984

HTTP/* 200
[Asserts]
xpath "normalize-space(//h2)" == "Dune (1984)"

GET http://localhost:3000/movies/foo
HTTP/* 404
