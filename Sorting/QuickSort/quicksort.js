function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (hi > lo) {
    let p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
  return arr;
}
function partition(arr, lo = 0, hi = arr.length - 1) {
  let pivot = hi;

  let i = lo - 1;
  for (let j = lo; j < hi; j++) {
    //If current element is smaller than or equal to pivot
    if (arr[j] <= arr[pivot]) {
      // increment index of smaller element
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  //put pivot in its position between lesser and higher partition
  [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];
  //return pivots position
  return i + 1;
}
quickSort([12, 34, 2, 48, 12, 43, 32, 56, 63, 123, 43, 2, 55, 1, 23, 92]);
