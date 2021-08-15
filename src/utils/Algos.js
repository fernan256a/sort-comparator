const merge = (left, right) => {
  let arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right];
}

export const mergeSort = (array) => {
  const middleIdx = array.length / 2

  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, middleIdx)
  return merge(mergeSort(left), mergeSort(array))
}

export const quickSort = (list) => {
  if (list.length < 2) {
    return list
  }

  const pivot = list[0]

  const smaller = list.filter((item) => item < pivot)
  const bigger = list.filter((item) => item > pivot)

  return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

export const heapsort = (list) => {
  const size = list.length;
  let index = ~~(size / 2 - 1);
  let last = size - 1;
  while (index >= 0) {
    heapify(list, size, --index);
  }
  while (last >= 0) {
    [list[0], list[last]] = [list[last], list[0]];
    heapify(list, --last, 0);
  }
  return list;
}

const heapify = (list, size, index) => {
  let largest = index;
  let left = index * 2 + 1;
  let right = left + 1;
  if (left < size && list[left] > list[largest]) {
    largest = left;
  }
  if (right < size && list[right] > list[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [list[index], list[largest]] = [list[largest], list[index]];
    heapify(list, size, largest);
  }
  return list;
}

export const bubbleSort = (arr) => {
  let n = arr.length;

  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j <= n - i - 1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }

  return arr;
}
