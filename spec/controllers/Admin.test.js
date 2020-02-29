const request = require('supertest')
describe('Controller test', ()=>{
    it('should recieve number of status', (done) =>{
        const server = require('../../app')
        request(server).get('/').expect(200, done)
        })
    })
