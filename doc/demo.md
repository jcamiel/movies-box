basic.hurl:

```hurl
GET http://localhost:3000

HTTP/* 200
```

---

basic.hurl:

```hurl
GET http://localhost:3000

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
```

---

basic.hurl

```hurl
GET http://localhost:3000

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "(//div[@class='home-movies'][1])/div" count == 11
xpath "string((//div[@class='home-movie']//img)[1]/@alt)" == "Dune - David Lynch"
xpath "string((//div[@class='home-movie']//img)[2]/@alt)" contains "Dark Crystal"
```

---

basic.hurl:

```hurl
GET http://localhost:3000

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "(//div[@class='home-movies'][1])/div" count == 11
xpath "string((//div[@class='home-movie']//img)[1]/@alt)" == "Dune - David Lynch"
xpath "string((//div[@class='home-movie']//img)[2]/@alt)" contains "Dark Crystal"

header "X-Powered-By" not exists
```

src/app.ts:

```
app.disable("x-powered-by");
```

---

basic.hurl:

```hurl
GET http://localhost:3000

HTTP/* 200
[Asserts]
xpath "string(//title)" == "Movies Box"
xpath "(//div[@class='home-movies'][1])/div" count == 11
xpath "string((//div[@class='home-movie']//img)[1]/@alt)" == "Dune - David Lynch"
xpath "string((//div[@class='home-movie']//img)[2]/@alt)" contains "Dark Crystal"

header "X-Powered-By" not exists
cookie "x-session-id" exists
cookie "x-session-id[HttpOnly]" exists
cookie "x-session-id[SameSite]" == "Strict"

# Check that we don't recreate a new session
GET http://localhost:3000

HTTP/* 200
[Asserts]
cookie "x-session-id" not exists
```

src/app.ts:

```
    name: "x-session-id",

    // Demo: cookie SameSite attribute
    cookie: {
        sameSite: "strict",
}   ,
```

---

