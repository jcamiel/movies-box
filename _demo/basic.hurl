# Affichage de la home
# ----------------------
GET http://localhost:3000
[Options]
verbose: false

HTTP 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "string(//title)" startsWith "Movies"
xpath "//div[@class='home-movies']" count == 2
header "X-Powered-By" not exists
cookie "connect.sid" not exists
cookie "x-session-id" exists
cookie "x-session-id[SameSite]" == "Strict"
