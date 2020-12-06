# Heapsort

## It is a comparison-based in-place and unstable sorting algorithm with worst case time complexity of O(n log n) and is based on binary heap data structure.

https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif
![wikipedia](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)
![wikipedia](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

It is usually represented in an array as it can be easily used to element supposing parent is stored at index i ~(i=0)

```
  iParent(i)     = floor((i-1) / 2) where floor functions map a real number to the smallest leading integer.
  iLeftChild(i)  = 2*i + 1
  iRightChild(i) = 2*i + 2
```

There are two types of heaps:
1.Max heap-here items are stored in an order such that value in a parent node is greater than the values in its two children nodes.
2.Min heap.  
First step is to create max heap
A sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array.The heap is updated after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array.

```javascript
function heapify(arr, n, i) {
	let largest = i; // Initialize largest as root
	let l = 2 * i + 1; // left = 2*i + 1
	let r = 2 * i + 2; // right = 2*i + 2

	// If left child is larger than root
	if (l < n && arr[l] > arr[largest]) {
		largest = l;
	}

	// If right child is larger than largest so far
	if (r < n && arr[r] > arr[largest]) {
		largest = r;
	}

	// If largest is not root
	if (largest != i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];

		// Recursively heapify the affected sub-tree
		heapify(arr, n, largest);
	}
}

// main function to do heap sort
function heapSort(arr, n = arr.length) {
	// Build heap (rearrange array)
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i);
	}
	// One by one extract an element from heap
	for (let i = n - 1; i > 0; i--) {
		// Move current root to end
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
	return arr;
}

heapSort([5, 9, 8, 7, 1]);
```
