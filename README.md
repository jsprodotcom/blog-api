blog-api
========

An article JSON API with Bookshelf.js

## Updated.

Now supporting Postgresql + MySQL + SQLite.

Thanks To: knex migrations!

## Usage.

Create a `pgfun` postgresql database. 

    createdb --encoding utf8 --owner postgres pgfun


Build the neccessary tables in for `NODE_ENV=development` with

    npm run migrations:dev

Start app with

    npm run start

### Add article

With cURL

    curl -H "Content-Type: application/json"
    http://localhost:3000/api/article -X POST -d '{"title": "Second",
    "body": "Second article cause what the hell", "author": "ArchNoob"}'

With httpie

    http localhost:3000/api/article title="Introduction" body="WHT"
    author="ArchNoob"

### Check all articles

With cURL

    curl http://localhost:3000/api/article

With httpie

    http localhost:3000/api/article


## Check individual article by ID.

Check individual article with it's ID

    http localhost:3000/api/article/0

### Update article

    http PUT localhost:3000/api/article title="Introduction" body="What
    the hell"
    author="ArchNoob"

### Remove article

    http DELETE localhost:3000/api/article/1

Where 1 is the article ID.

## Run Tests with

    npm run tests

## What else?

I'm learning knex, bookshelf & PG hope to intergrate it with these guys
soon!

- [koa-blogapi](https://github.com/maotora/koa-blogapi)
- [koa-userapi](https://github.com/maotora/koa-userapi)

**Peace!**
