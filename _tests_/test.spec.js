//Import Supertest
const request = require('supertest');
//Describe your Action
describe('GET /posts', function() {
//Create a test
it('Should return a status code 200', function(done) {
request('https://jsonplaceholder.typicode.com/')
//HTTP Verb
.get('posts/5')
//Headers
.set('Accept', 'application/json')
//Our assertion
.expect('Content-Type', /json/)
.expect(200, done);
});
});

describe('Create /post', () => {
    it('Should Return my Json', done => {
    request('https://jsonplaceholder.typicode.com/')
    .post('posts')
    .set('Accept', 'application/json')
    .send({
    title: 'test',
    body: 'Earth is not flat',
    userId: 2
    })
    .expect('Content-Type', /json/)
    // .expect({message: "Hello, World!"}, done);
    .expect({ title: 'test', body: 'Earth is not flat', userId: 2, id: 101 }, done);
    });
    });