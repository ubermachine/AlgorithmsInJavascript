# QuickSort

## It is an efficient sorting algorithm based on Divide and Conquer strategy with average performance of O(n log n) and worst case of O(n^2) comparisons.

A large array is partitioned into two arrays one of which holds smaller values than the pivot, based on which the partition is made and another array holds values greater than the pivot value.  
![wikipedia](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)  
  
Video-https://www.youtube.com/watch?v=MZaf_9IZCrc  

```javascript
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
}  
```  
  
### Another implementation using Hoare's partition scheme  


```javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
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

```
