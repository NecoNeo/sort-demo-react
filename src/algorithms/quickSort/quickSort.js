// QUICK SORT

function quickSort(array) {
  quick(array, 0, array.length - 1);
  return array;
}


function quick(array, from, to) {
  // fall back to insertion sort
  if (to - from < 5) {
    insertionSort(array, from, to);
    return;
  }
  let pivot = setPivot(array, from, to);
  let i = from;
  let j = to - 1;
  while (true) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(array, i, j);
      i++;
      j--;
    } else {
      break;
    }
  }
  swap(array, i, to);
  quick(array, from, i - 1);
  quick(array, i + 1, to);
}

function setPivot(array, from, to) {
  const middle = from + Math.floor((to - from) / 2);
  if (array[from] > array[middle]) {
    swap(array, from, middle);
  }
  if (array[middle] > array[to]) {
    swap(array, middle, to);
  }
  if (array[from] > array[middle]) {
    swap(array, from, middle);
  }
  swap(array, middle, to);
  return array[to];
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}


// insertion sort
function insertionSort(array, from, to) {
  if (to - from < 1) {
    return;
  }
  for (let i = from + 1; i <= to; i++) {
    let j = i;
    let temp = array[j];
    for (; j > from && array[j - 1] > temp; j--) {
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
}

export {
  quickSort
}