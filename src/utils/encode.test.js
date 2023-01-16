const { encode } = require('./encode');

describe('encode utility function', () => {
  it.each([
    ['Ala ma kota', 'QWxhIG1hIGtvdGE='],
    ['A kot ma Ale', 'QSBrb3QgbWEgQWxl'],
    ['Lorem ipsum!', 'TG9yZW0gaXBzdW0h'],
    ['Hello World!', 'SGVsbG8gV29ybGQh'],
    ['Happy New Year!', 'SGFwcHkgTmV3IFllYXIh'],
    ['Gone with the wind', 'R29uZSB3aXRoIHRoZSB3aW5k'],
    ['Annie Hall', 'QW5uaWUgSGFsbA=='],
    ["King's Speech", 'S2luZydzIFNwZWVjaA=='],
    ['American Psycho', 'QW1lcmljYW4gUHN5Y2hv'],
    ['Quo vadis?', 'UXVvIHZhZGlzPw=='],
  ])('encodes the %s properly', (input, expectedOutput) =>
    expect(encode(input)).toBe(expectedOutput)
  );
});
