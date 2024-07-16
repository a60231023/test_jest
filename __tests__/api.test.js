// rquire the dependeny
const request = require('supertest');
const app = require('../index');

//create a test suite
describe('API tests', () => {
    it('should create a new book', async () => {
        const res = await request(app)
          .post('/api/books')
          .send({ title: 'The Alchemist', author: 'Paulo Coelho' });
    
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('The Alchemist');
      });

});