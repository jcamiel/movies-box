GET http://localhost:3000

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "(//div[@class='home-movies'][1])/div" count == 11
xpath "string((//div[@class='home-movie']//img)[1]/@alt)" == "Dune - David Lynch"
xpath "string((//div[@class='home-movie']//img)[2]/@alt)" contains "Dark Crystal"

# Verify that a session is created
cookie "x-session-id" exists
cookie "x-session-id[HttpOnly]" exists
cookie "x-session-id[SameSite]" == "Strict"
# Check we don't leak information
header "X-Powered-By" not exists


# Check that we don't recreate a new session
GET http://localhost:3000

HTTP/* 200
[Asserts]
cookie "x-session-id" not exists
