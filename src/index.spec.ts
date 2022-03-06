import { _map } from '.';

const numbersArray = [1, 5, 10, 15];
const stringsArray = ['apple', 'lemon', 'juice', 'watermelon'];
const personArray = [{ name: 'Jessie' }, { name: 'James' }, { name: 'Meow' }];

describe('Map method', () => {
  it('should be able to work properly', () => {
    let srcArray: number[] = [];
    let indexes: number[] = [];

    const result = _map<number, number>(numbersArray, (n, i, src) => {
      indexes.push(i);
      srcArray = src;

      return n * 2;
    });

    expect(result).toEqual([2, 10, 20, 30]);
    expect(srcArray).toEqual(numbersArray);
    expect(indexes).toEqual([0, 1, 2, 3]);
  });

  it('should be able to return an array of numbers divided by two', () => {
    const result = _map<number, number>(numbersArray, (n) => n / 2);

    expect(result).toEqual([0.5, 2.5, 5, 7.5]);
  });

  it('should be able to return an array of reversed strings', () => {
    const result = _map<string, string>(stringsArray, (val) =>
      Array.from(val).reverse().join('')
    );

    expect(result).toEqual(['elppa', 'nomel', 'eciuj', 'nolemretaw']);
  });

  it('should be able to return an array of names', () => {
    const result = _map<{ name: string }, string>(personArray, (p) => p.name);

    expect(result).toEqual(['Jessie', 'James', 'Meow']);
  });
});
