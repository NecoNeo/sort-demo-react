// INSERTION SORT

function insertionSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    }
  }
  return array;
}

export {
  insertionSort
};
