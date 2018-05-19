import { insertionSort } from '../src/algorithms/insertionSort';

// it('sort correctly', () => {
//   const arr = (new Array(100)).fill(0).map((value, index) => Math.random());
//   insertionSort(arr);
//   for (let i = 0; i < arr.length - 1; i++) {
//     expect(arr[i] <= arr[i + 1]).toBe(true);
//   }
// });

describe('sort correctly', () => {
  const arrMap = {};
  const arr = (new Array(100)).fill(0)
    .map((value, index) => {
      const newValue = Math.random();
      if (!arrMap[newValue]) {
        arrMap[newValue] = 1;
      } else {
        arrMap[newValue]++;
      }
      return newValue;
    });
  insertionSort(arr);
  const sortedArrMap = {};
  arr.forEach(value => {
    if (!sortedArrMap[value]) {
      sortedArrMap[value] = 1;
    } else {
      sortedArrMap[value]++;
    }
  });

  it('every item in the sorted array is smaller than the after', () => {
    for (let i = 0; i < arr.length - 1; i++) {
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });

  it('array items is just sorted not missing or value changed', () => {
    expect(arrMap).toEqual(sortedArrMap);
  });
});