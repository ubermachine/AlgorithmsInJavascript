# Shell Sort

## It is an in-place sorting algorithm based on insertion sort, we start by sorting the elements with large gap in between them then successively reducing the gap ,its performance highly depends on the gap sequence it uses.

We basically select a gap interval which decides which elements will be compared ex gap 6 in array of 12 then reducing the gap to 3 then 1 which will produce a sorted list eventually.

![wikipedia](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

```javascript
function shellSort(array) {
	var gap = Math.floor((array.length - 1) / 2);

	while (gap > 0) {
		for (let i = gap; i < array.length; i++) {
			let j = i;
			var container = array[i];

			while (j >= gap && array[j - gap] > container) {
				array[j] = array[j - gap];
				j = j - gap;
			}

			array[j] = container;
		}
		gap = Math.floor(gap / 2);
	}

	return array;
}
shellSort([5, 9, 8, 7, 1]);
```
