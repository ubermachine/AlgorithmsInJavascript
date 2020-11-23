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
