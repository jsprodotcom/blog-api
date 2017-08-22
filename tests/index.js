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
        }
    })
})
