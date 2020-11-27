# Merge Sort

## It is a stable and efficient comparison based divide and conquer algorithm with worst case performance of O(n log n) with space complexity of O(n)

![wikipedia](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)  
It basically works by dividing the array into n sublists and then merge these sorted lists into a single sorted array.

```javascript
function mergeSort(arr) {
	if (arr.length == 1) {
		return arr;
	} else {
		let mid = Math.floor(arr.length / 2);

		return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
	}
}
function merge(arr1, arr2) {
	let temp = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			temp.push(arr1.shift());
		} else if (arr1[0] > arr2[0]) {
			temp.push(arr2.shift());
		} else {
			temp.push(arr1.shift(), arr2.shift());
		}
	}
	return [...temp, ...arr1, ...arr2];
}

mergeSort([11, 4, 2, 8]);
```
