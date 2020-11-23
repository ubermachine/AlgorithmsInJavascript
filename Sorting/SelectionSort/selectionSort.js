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
