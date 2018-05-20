import { quickSort } from '../src/algorithms/quickSort/quickSort';
import arrayBuilder from './arrayBuilder';


describe('quick sort works correctly', () => {
  const { arr, arrMap, sortedArrMap } = arrayBuilder(quickSort);

  it('every item in the sorted array is smaller than the after', () => {
    for (let i = 0; i < arr.length - 1; i++) {
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });

  it('array items is just sorted not missing or value changed', () => {
    expect(arrMap).toEqual(sortedArrMap);
  });
});