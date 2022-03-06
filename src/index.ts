export function _map<T, U>(
  array: T[],
  callback: (current: T, index: number, source: T[]) => U
) {
  const finalArray: U[] = [];

  for (let i = 0; i < array.length; i++) {
    finalArray.push(callback(array[i], i, array));
  }

  return finalArray;
}
