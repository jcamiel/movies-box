GET http://localhost:3000
HTTP/* 200
[Asserts]
# Verify that a session is created
cookie "x-session-id" exists
cookie "x-session-id[HttpOnly]" exists

