function radixSort(arr) {
	//First we need to find the max number so we can find out how many passes we need to do starting from LSD i.e Ones place
	let maxDigits = String(Math.max(...arr)).length; //Digits must be less than 22 or you will need to first use String(BigInt("YourNumberHere")
	let divisor = 1; //https://stackoverflow.com/a/41712226/13867949

	while (maxDigits > 0) {
		// Create bucket arrays for each of 0-9
		let buckets = Array.from(Array(10), () => []);

		for (let num of arr) {
			buckets[Math.floor((num / divisor) % 10)].push(num);
		}
		// Flatten the array
		arr = buckets.flat();
		// Move to the next significant digit as 123%10=3 and 123%100=23
		divisor *= 10;
		maxDigits--;
	}
	console.log(arr);

	return arr;
}
radixSort(Array.from({ length: 400 }, () => Math.floor(Math.random() * 500)));
