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

`docker-compose up -d`でコンテナーを作成し起動。

`docker container ls`で上手くコンテナーが起動しているかを確認。

```bash
$ docker container ls

CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS          PORTS                    NAMES
bb2afaca5c05   postgres:14-alpine   "docker-entrypoint.s…"   27 seconds ago   Up 26 seconds   0.0.0.0:5432->5432/tcp   nextjs_prisma
```

データベースのデータは`postgres`フォルダー内に展開される。このフォルダーを消さない限り、データは保たれる。

