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

