# Selection Sort

## It is a simple in-place comparison algorithm with O(n^2) time complexity,which means its inefficient to sort large data sets.

It divides the list into two parts one is sorted and another is unsorted list, at first we begin with empty sorted list and whole input is the unsorted list, we begin with leftmost element and compare it with rest of the list if its larger than any element in list we swap both elements else if the element is already at its final place and we move to next element.  
![wikipedia](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

```javascript
function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) min = j;
		}
		if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
	}
	return arr;
}

selectionSort([3, 3, 5, 7, 9, 444, 5, 42, 2]);
```
