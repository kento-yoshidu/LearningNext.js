# Next.js & Prisma

## 環境

- Next.js
- TypeScript 
- Docker、docker-compose

## Next.jsとTypeScriptのインストール

`npx create-next-app@latest --ts my-app`でNext.jsをインストールします。

```bash
$ npx create-next-app --ts .
Creating a new Next.js app in C:\github\LearningNext.js\prisma.

Using npm.

Installing dependencies:
- react
- react-dom
- next

# ...略

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd C:\github\LearningNext.js\prisma
  npm run dev


A new version of `create-next-app` is available!
You can update by running: npm i -g create-next-app
```

`npm run dev`で3000番ポートにアクセスし、Next.jsの画面が現れたら成功。

# DockerでDBを作成する

`db`フォルダーを作成、直下に`docker-compose.yml`を作成する。

中身は以下の通り。

```yml
version: "3.2"

services:
  db:
    image: postgres:14-alpine
    container_name: nextjs_prisma
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: sampledb
      PGDATA: /var/lib/postgresql/data/pgdata
    ports:
      - 5432:5432
    volumes:
      - ./postgres:/var/lib/postgresql/data
```

`docker-compose up -d`でコンテナーを作成し起動。

`docker container ls`で上手くコンテナーが起動しているかを確認。

```bash
$ docker container ls

CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS          PORTS                    NAMES
bb2afaca5c05   postgres:14-alpine   "docker-entrypoint.s…"   27 seconds ago   Up 26 seconds   0.0.0.0:5432->5432/tcp   nextjs_prisma
```

データベースのデータは`postgres`フォルダー内に展開される。このフォルダーを消さない限り、データは保たれる。

https://qiita.com/mm_sys/items/996991d19b0d6e5c0715

`docker container exec -it nextjs_prisma bash`でコンテナーに入れる。

`psql -U user -l`でデータベース一覧を確認できる。

```bash
bash-5.1# psql -U user -l
                             List of databases
   Name    | Owner | Encoding |  Collate   |   Ctype    | Access privileges
-----------+-------+----------+------------+------------+-------------------
 postgres  | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 sampledb  | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 template0 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
 template1 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
(4 rows)
```

`sampledb`データベースが作成されていることが確認できます。

## prismaでデータベースを構築する

`npm install -D prisma`でPrismaをインストールする。

```bash
$ npm install prisma -D

added 2 packages, and audited 237 packages in 28s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

`npx prisma init`で初期化する

```shell
$ npx prisma init
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

`prisma/schema.prisma`と`.env`ができる。

`prisma/schema.prisma`に以下の内容を追記する。

```prisma
model Post {
  id    Int
  title String
}
```

すると以下のエラーが出る。

```bash
Error validating model "Post": Each model must have at least one unique criteria that has only required fields. Either mark a single field with `@id`, `@unique` or add a multi field criterion with `@@id([])` or `@@unique([])` to the model.
```

```prisma
model Post {
  id    Int     @id
  title String
}
```

