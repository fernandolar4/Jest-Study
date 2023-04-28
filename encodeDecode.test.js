const { encode, decode } = require('./encodeDecode.js');

describe('testa encode() e decode()', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; ', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; ', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso ', () => {
    expect(encode('B, C, D, F, G, J, K, L, M, N, P, Q, S, T, V, X, Z')).toBe(
      'B, C, D, F, G, J, K, L, M, N, P, Q, S, T, V, X, Z'
    );
    expect(decode('6, 7, 8, 9')).toBe('6, 7, 8, 9');
  });
  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro ', () => {
    const teste = 'lorem ipsum dolor sit amet, consectetur adip';
    const teste2 = '3-91029-3-012 lorem 192319283912';

    expect(encode(teste)).toHaveLength(teste.length);
    expect(decode(teste2)).toHaveLength(teste2.length);
  });
});
