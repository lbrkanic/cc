const { expect } = require('chai');
const request = require('supertest')

const app = require('../app')

describe('endpoint POST /encoder', () => {
  it('return encoded result for authorized users and valid input', (done) => {
    request(app)
      .post('/encoder')
      .send({ input: 'RRFA' })
      .set('authorization', 'xyz0987654321')
      .end((error, response) => {
        if (error) {
          return done(error)
        } else {
          expect(response.body.result).to.equal('R2F1A1')
          return done()
        }
      })
  })

  it('return error for authorized users and invalid input', (done) => {
    request(app)
      .post('/encoder')
      .send({ input: 'RRFA3' })
      .set('authorization', 'xyz0987654321')
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error)
        } else {
          return done()
        }
      })
  })

  it('should block unauthorized users', (done) => {
    request(app)
      .post('/encoder')
      .send({ input: 'RRFA' })
      .expect(401)
      .end((error) => {
        if (error) {
          return done(error)
        } else {
          return done()
        }
      })
  })
})