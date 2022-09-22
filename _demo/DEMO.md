# Misc

- scrolling natural
- supprimer toutes les apps
- Firefox, IntelliJ


# Shell

```shell
$ git checkout demo-dev-days
$ brew uninstall hurl
$ cd ~/Documents/Dev/movies-box/
$ rm -rfd dist/ && npm run build
$ rm -rfd /tmp/report
```


# Firefox

Les liens :

- <https://ccmd.pages.gitlab.si.francetelecom.fr/prez/hurl-devdays-2022/index.html>
- <http://localhost:3000>
- <https://hurl.dev>
- <https://github.com/jcamiel/movies-box>
- <file:///tmp/report/index.html>
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
$ cd ~/Library/Application Support/JetBrains/IntelliJIdea2022.1/workspace
```


```xml
<project version="4">
    <component name="BookmarksManager">
        <option name="groups">
            <GroupState>
                <option name="bookmarks">
                    <BookmarkState>
                        <attributes>
                            <entry key="url" value="file://$PROJECT_DIR$/src/views/search.hbs" />
                            <entry key="line" value="13" />
                        </attributes>
                        <option name="description" value="commentaires" />
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
                            <entry key="url" value="file://$PROJECT_DIR$/src/core/session.ts" />
                            <entry key="line" value="21" />
                        </attributes>
                        <option name="description" value="cookie SameSite attribute" />
                        <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                    </BookmarkState>
                    <BookmarkState>
                        <attributes>
                            <entry key="url" value="file://$PROJECT_DIR$/src/core/session.ts" />
                            <entry key="line" value="19" />
                        </attributes>
                        <option name="description" value="default cookie session name" />
                        <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                    </BookmarkState>
                    <BookmarkState>
                        <attributes>
                            <entry key="url" value="file://$PROJECT_DIR$/src/app.ts" />
                            <entry key="line" value="22" />
                        </attributes>
                        <option name="description" value="X-Powered-By header" />
                        <option name="provider" value="com.intellij.ide.bookmark.providers.LineBookmarkProvider" />
                    </BookmarkState>
                </option>
                <option name="name" value="movies-box" />
            </GroupState>
        </option>
    </component>
</project>

```


# Pipeline

.github/workflows/test.yml:

```yaml
      - name: Integration tests
        run: |
          curl -LO https://github.com/Orange-OpenSource/hurl/releases/download/1.7.0/hurl_1.7.0_amd64.deb
          sudo dpkg -i hurl_1.7.0_amd64.deb
          bin/integration.sh
```



integration/integration.sh
```sh
#!/bin/bash
set -eu

wait_for_url () {
    echo "Testing $1"
    max_in_s=$2
    delay_in_s=1
    total_in_s=0
    while [ $total_in_s -le "$max_in_s" ]
    do
        echo "Wait ${total_in_s}s"
        if (echo -e "GET $1\nHTTP/* 200" | hurl > /dev/null 2>&1;) then
            return 0
        fi
        total_in_s=$(( total_in_s +  delay_in_s))
        sleep $delay_in_s
    done
    return 1
}

echo "Starting server..."
nohup node dist/bin/www > dist/output.log 2>&1 &
server_pid="$!"
echo "Starter server pid $server_pid"

echo "Waiting server to be ready..."
wait_for_url 'http://localhost:3000' 60

echo "Running Hurl tests"
hurl --test integration/*.hurl

kill -9 "$server_pid"
```


