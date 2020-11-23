# Insertion Sort

## It is a stable and in-place(O(1) memory space) sorting algorithm its more efficient than bubble sort and selection sort and has average time complexity of O(n^2)

![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

We divide the unsorted array into two parts -sorted part and unsorted part.  
The sorted part just has one element (which is first element of unsorted array).  
We then pick up element one by one from unsorted part and compare it with the elements in the sorted part and move them to their correct position one at a time.

```javascript
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		//we check if current is smaller than elements in sorted array
		for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
			//here we shift element to its next position
			arr[j + 1] = arr[j];
		}
		//finally after shifting we insert current element to its correct place
		//notice j+1 is due to j-- try to console log j if you get confused.
		arr[j + 1] = current;
	}
	return arr;
}
insertionSort([333, 34, 56, 416, 6, 6444, 1]);
```
