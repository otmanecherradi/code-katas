const { removeChar } = require('./01-solution');

describe('Remove First and Last Character Tests', () => {
  it('Fixed Tests', () => {
    expect(removeChar('eloquent')).toStrictEqual('loquen');
    expect(removeChar('country')).toStrictEqual('ountr');
    expect(removeChar('person')).toStrictEqual('erso');
    expect(removeChar('place')).toStrictEqual('lac');
    expect(removeChar('ooopsss')).toStrictEqual('oopss');
  });
});
