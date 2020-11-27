# QuickSort

## It is an efficient sorting algorithm based on Divide and Conquer strategy with average performance of O(n log n) and worst case of O(n^2) comparisons.

A large array is partitioned into two arrays one of which holds smaller values than the pivot, based on which the partition is made and another array holds values greater than the pivot value.  
![wikipedia](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

Video guide- https://www.youtube.com/watch?v=MZaf_9IZCrc

### Video's implementation

```javascript
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
quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```

### Simple using Array

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
	return [...quickSort(left), ...equal, ...quickSort(right)];
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
