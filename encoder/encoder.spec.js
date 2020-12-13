const { expect } = require('chai');
const controller = require('./encoder.controller')

describe('Encoder', () => {
  const testCases = [
    { input: 'RRFA', result: 'R2F1A1' },
    { input: 'FFFF', result: 'F4' },
    { input: 'TVTAAAAA', result: 'T1V1T1A5' },
    { input: 'IIIIIII', result: 'I7' },
    { input: '', result: '' }
  ]

  testCases.forEach((testCase) => {
    it(`returns '${testCase.result}' for input '${testCase.input}'`, () => {
      expect(controller(testCase.input)).to.equal(testCase.result)
    })
  })
})