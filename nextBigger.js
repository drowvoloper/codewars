/*
 * Create a function that takes a positive integer 
 * and returns the next bigger number that can be formed by rearranging its digits. For example:
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 *
 * If the digits can't be rearranged to form a bigger number,
 * return -1
 *
 * 9 ==> -1
 * 111 ==> -1
 * 531 ==> -1
 *
*/

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

const permute = (arr, len, i, combinations) => {
	let temp;

	if (i == len) {
		combinations.push(parseInt(arr.join("")));
	} else {
		for (let j = i; j < len; j++) {
			swap(arr, i, j);
			permute(arr, len, i+1, combinations);

			swap(arr, i, j);
		}
	}
	return combinations;
}

const nextBigger = (num) => {
	let arr = num.toString().split("");
	let combinations = permute(arr, arr.length, 0, []);
	combinations = combinations.filter(combination => combination > num);
	if (combinations.length == 0) {
		return -1;
	}
	combinations = combinations.sort((a, b) => a - b);
	return combinations[0];
}

console.time("nextBigger");
nextBigger(1234567890);
console.timeEnd("nextBigger");
//nextBigger(144);
