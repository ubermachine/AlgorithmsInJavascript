function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
  console.log(arr);
  return arr;
}
function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot && left <= right) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
