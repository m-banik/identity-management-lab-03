const generatePassword = require('./generatePassword');

describe('generatePassword utility function', () => {
  let passedTests;
  const samplesNumber = 1000;

  beforeEach(() => {
    passedTests = 0;
  });

  it('generates password that is at least 8 characters long', () => {
    for (let i = 0; i < samplesNumber; i++) {
      const password = generatePassword();

      if (password.length < 8) break;
      passedTests++;
    }

    expect(passedTests).toBe(samplesNumber);
  });

  it.each([
    ['great letters', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    ['small letters', 'abcdefghijklmnopqrstuvwxyz'],
    ['cyphers', '0123456789'],
    ['special signs', '!#$%&()*+,-./:;<=>?@[]^_`{|}~'],
  ])(`generates password that includes %s`, (_, chars) => {
    for (let i = 0; i < samplesNumber; i++) {
      const password = generatePassword();

      const hasExpectedChar = !!password
        .split('')
        .find((passChar) => chars.includes(passChar));

      if (!hasExpectedChar) break;
      passedTests++;
    }

    expect(passedTests).toBe(samplesNumber);
  });
});
