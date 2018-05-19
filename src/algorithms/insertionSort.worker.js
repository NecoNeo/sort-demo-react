// INSERTION SORT

function insertionSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let temp = array[j];
    for (; j > 0 && array[j - 1] > temp; j--) {
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }

  // low performance
  // for (let i = 1; i < array.length; i++) {
  //   for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
  //     [array[j], array[j - 1]] = [array[j - 1], array[j]];
  //   }
  // }
  return array;
}

// Worker

onmessage = function(event) {
  postMessage({messageType: 'finished', result: insertionSort(event.data.array)});
}