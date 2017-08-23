var request = require('supertest')
var app = require('../server/app.js')
var inst = app.listen()

describe('blog-api basics', function() {
    it('Gets root', function(done) {
        request(inst)
            .get('/')
            .expect(200, done)
    })

    it('Doesn\'t giva ****', function(done) {
        request(inst)
            .get('/****')
            .expect(404, done)
    })
})

describe('blog-api CRUD support', function() {
    var article = {}

    beforeEach(function(done) {
        article = {
            'title': 'Testing',
            'body': 'Wareva',
            'author': 'test_user'
        };
        done();
    })

    afterEach(function(done) {
        delete article.title;
        delete article.body;
        delete article.author;
        done();
    })

    it('Creates articles', function(done) {
        request(inst)
            .post('/api/article')
            .send(article)
            .expect(/id/, done)
    })

    it('Updates articles', function(done) {
        article.body = 'An update!'
        request(inst)
            .put('/api/article/1')
            .send(article)
            .expect(/updated article!/, done)
    })

    it('Gets an article', function(done) {
        request(inst)
            .get('/api/article/1')
            .expect(/Testing/, done)
    })

    it('Delete an article', function(done) {
        request(inst)
            .del('/api/article/1')
            .expect(/removed article!/, done)
    })
})
