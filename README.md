blog-api
========

An article JSON API with Bookshelf.js

## Updated.

Now supporting Postgresql db.

## Usage.

Create a `pgfun` postgresql database. 

    createdb --encoding utf8 --owner postgres pgfun


Create an `article` table in pgfun db.

    psql --dbname pgfun --file article

Run app.

    node app.js

## Add article

With cURL

    curl -H "Content-Type: application/json"
    http://localhost:3000/api/article -X POST -d '{"title": "Second",
    "body": "Second article cause what the hell", "author": "ArchNoob"}'

With httpie

    http localhost:3000/api/article title="Introduction" body="WHT"
    author="ArchNoob"

## Check all articles

With cURL

    curl http://localhost:3000/api/article

With httpie

    http localhost:3000/api/article

## Check individual article by ID.

Check individual article with it's ID

    http localhost:3000/api/article/0

(Same with cURL but you gotta add "http")

## What else?

I'm getting use knex, bookshelf & PG hope to intergrate it with these guys
soon!

- [koa-blogapi](https://github.com/maotora/koa-blogapi)
- [koa-userapi](https://github.com/maotora/koa-userapi)

**Peace!**
