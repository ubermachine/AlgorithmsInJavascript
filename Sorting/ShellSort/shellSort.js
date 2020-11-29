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
