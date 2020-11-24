# QuickSort

## It is an efficient sorting algorithm based on Divide and Conquer strategy with average performance of O(n log n) and worst case of O(n^2) comparisons.

A large array is partitioned into two arrays one of which holds smaller values than the pivot, based on which the partition is made and another array holds values greater than the pivot value.
![wikipedia](https://en.wikipedia.org/wiki/File:Sorting_quicksort_anim.gif)

Video-https://www.youtube.com/watch?v=MZaf_9IZCrc

````javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ];
}```
````
