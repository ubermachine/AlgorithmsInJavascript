# Radix sort

## It is a non-comparative sorting algorithm that takes advantage of the fact that integers have a finite number of bits it has a runtime of 0(kn).

Radix or base is the number of unique digits, including the digit zero, used to represent numbers.
Radix sort is a close cousin of bucket sort.

Radix sort can be implemented to start at either the most significant digit (MSD) or least significant digit (LSD). For example, with 1234, one could start with 1 (MSD) or 4 (LSD).

We iterate through each digit of the number,grouping numbers by each digit.We might first sort by the first digit, so that the Os are grouped together. Then, we sort each of these groupings by the next digit. We repeat this process sorting by each subsequent digit, until finally the whole array is sorted.
Unlike comparison sorting algorithms, which cannot perform better than O(n log(n)) in the average case, radix sort has a runtime of 0(k(n+b), where n is the number of elements,b is base(decimal in case of digits =10) and k is the number of passes of the sorting algorithm ex. in 124 there will be three passes.

```javascript
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
		// Move to the next significant digit as 123%10=3 and 123%100=23 see above formula and stack overflow answer
		divisor *= 10;
		maxDigits--;
	}
	console.log(arr);

	return arr;
}
radixSort(Array.from({ length: 400 }, () => Math.floor(Math.random() * 500)));
```
