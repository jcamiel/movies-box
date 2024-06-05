# Misc

- scrolling natural
- supprimer toutes les apps
- Firefox, IntelliJ
- vérifier qu'on est logué dans GitHub

# IntelliJ

- font 16 (default 13)
- deux tabs d'ouverts sur le fichier README.


# Shell

```shell
$ git checkout demo-dev-days
$ brew uninstall hurl
$ hurl --version
$ cd ~/Documents/Dev/movies-box/
$ rm -rfd dist/ && npm run build
```


# Firefox

Les liens :

- <https://ccmd.pages.gitlab.si.francetelecom.fr/prez/hurl-devdays-2022/index.html>
- <http://localhost:3000>
- <https://hurl.dev>
- <https://github.com/jcamiel/movies-box>
- <https://myshop.pages.gitlab.si.francetelecom.fr/myshop/hurl/index.html>


```javascript
clearHistory()
$x("string(//title)") 
$x("//div[@class='home-movies']")
$x("string(//input[@name='_csrf']/@value)")
$x("//comment()")
```


# IntelliJ bookmarks


```shell
$ cd ~/Library/Application\ Support/JetBrains/IntelliJIdea2024.1/workspace
```


```xml
<component name="BookmarksManager">
    <option name="groups">
        <GroupState>
            <option name="bookmarks">
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/app.ts" />
                        <entry key="line" value="22" />
                    </attributes>
                    <option name="description" value="X-Powered-By header" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/core/session.ts" />
                        <entry key="line" value="21" />
                    </attributes>
                    <option name="description" value="cookie SameSite attribute" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/core/session.ts" />
                        <entry key="line" value="18" />
                    </attributes>
                    <option name="description" value="default cookie session name" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/routes/login.ts" />
                        <entry key="line" value="26" />
                    </attributes>
                    <option name="description" value="CSRF" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/routes/login.ts" />
                        <entry key="line" value="35" />
                    </attributes>
                    <option name="description" value="CSRF" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/routes/login.ts" />
                        <entry key="line" value="13" />
                    </attributes>
                    <option name="description" value="CSRF" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/routes/login.ts" />
                        <entry key="line" value="5" />
                    </attributes>
                    <option name="description" value="CSRF" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/views/login.hbs" />
                        <entry key="line" value="17" />
                    </attributes>
                    <option name="description" value="CSRF" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/routes/signup.ts" />
                        <entry key="line" value="54" />
                    </attributes>
                    <option name="description" value="validation name" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
                <BookmarkState>
                    <attributes>
                        <entry key="url" value="file://$PROJECT_DIR$/src/views/search.hbs" />
                        <entry key="line" value="13" />
                    </attributes>
                    <option name="description" value="commentaires" />
                    <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                </BookmarkState>
            </option>
            <option name="name" value="movies-box" />
        </GroupState>
    </option>
</component>
```


# Pipeline

.github/workflows/test.yml:

```yaml
      - name: Integration tests
        run: |
          VERSION=4.3.0
          curl --location --remote-name https://github.com/Orange-OpenSource/hurl/releases/download/$VERSION/hurl_${VERSION}_amd64.deb
          sudo apt update && sudo apt install ./hurl_${VERSION}_amd64.deb
          bin/integration.sh
```



integration/integration.sh
```sh
#!/bin/bash
set -eu

echo "Starting server..."
nohup node dist/bin/www > dist/output.log 2>&1 &
server_pid="$!"
echo "Starter server pid $server_pid"

echo "Waiting server to be ready..."
echo -e "GET http://localhost:3000\nHTTP 200" | \
  hurl \
  --retry 60 \
  --retry-interval 1000 \
  --no-output

echo "Running Hurl tests"
hurl --test --parallel integration/*.hurl

kill -9 "$server_pid"

```


