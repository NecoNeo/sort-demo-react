import { insertionSort } from '../src/algorithms/insertionSort';

it('sort correctly', () => {
  const arr = (new Array(100)).fill(0).map((value, index) => Math.random());
  insertionSort(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    expect(arr[i] <= arr[i + 1]).toBe(true);
  }
});