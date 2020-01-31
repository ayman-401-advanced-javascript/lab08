'use strict';

const { server } = require('../server.js');
const supergose = require('@code-fellows/supergoose');
const mockRequest = supergose(server);

describe('Categories API Test', () => {
  it('post a new categorie item', () => {
    let obj = { name: 'test 1 category' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('respond properly to a get request to /api/v1/categories', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(typeof results.body).toBe('object');
      });
  });
  it('get one category item', () => {
    let testObj = { name: 'Test to get one category' };
    return mockRequest.post('/api/v1/categories')
      .send(testObj)
      .then(data => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`)
          .then(data => {
            let record = data.body[0];
            Object.keys(testObj).forEach(key => {
              expect(record[key]).toEqual(testObj[key]);
            });
          });
      });
  });
  it('respond properly to a delete request to /api/v1/categories/:id', () => {
    let obj = { name: 'test 2 category' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest
          .delete(`/api/v1/categories/${data.body._id}`)
          .send(obj)
          .then(() => {
            return mockRequest.get(`/api/v1/categories/${data.body._id}`)
              .then(results => {
                expect(results.status).toBe(200);
                expect(results.body[0]).toBe();
              });
          });
      });
  });
  it('respond properly to a update request to /api/v1/categories/:id', () => {
    let obj = { name: 'test 4 category' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.put(`/api/v1/categories/${data.body._id}`)
          .send({ name: 'TEST IS UPDATED' })
          .then(results => {
            expect(results.status).toBe(200);
            expect(results.body.name).toEqual('TEST IS UPDATED');
          });
      });
  });
});