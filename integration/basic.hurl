GET http://localhost:3000
HTTP 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "string(//title)" startsWith "Movies"
xpath "//div[@class='home-movies']" count == 2
