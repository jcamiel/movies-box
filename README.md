## Building from sources


### Without watcher

1. Installation
    ```shell
    $ npm install
    ```
2. Build
    ```shell
    $ npm run clean
    $ npm run build
    ```
3. Run
   ```shell
   $ DEBUG=movies-box:* node dist/bin/www
   ```

### With watcher

1. Run `nodemon` (an instance of the local server will be launched)
    ```shell
    $ npm run watch
    ```
2. Build
    ```shell
    $ npm run build
    ```


Then, open <http://localhost:3000>
One user is created login: `bob78`, password: `12345678`

## Templating

Templates uses [handlebars]






[handlebars]: https://handlebarsjs.com