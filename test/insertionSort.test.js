import { insertionSort } from '../src/algorithms/insertionSort/insertionSort';
import arrayBuilder from './arrayBuilder';


describe('insertion sort works correctly', () => {
  const { arr, arrMap, sortedArrMap } = arrayBuilder(insertionSort);

  it('every item in the sorted array is smaller than the after', () => {
    for (let i = 0; i < arr.length - 1; i++) {
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });

  it('array items is just sorted not missing or value changed', () => {
    expect(arrMap).toEqual(sortedArrMap);
  });
});