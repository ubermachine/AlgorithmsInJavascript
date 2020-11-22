##Bubble sort is one of the simplest sorting algorithm with average complexity of (n^2) which means its pretty slow while performing operation on huge dataset.

![wikipedia]{https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif}
In simple words we compare one element(in this case we start with first) with its adjacent element if its smaller than the neighbour we leave it and move forward else if its larger than its neighbour we swap both elements this way we are bubbling up the unsorted values to the end till its completely sorted  
we do this n-1 times.  
It is a stable algorithm as order of same values is retained as per its original order.

```javascript
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
```
