'use strict';

function reverseNumber(num) {
	let reverseNum = 0;
	const isNegative = num < 0;
	num = Math.abs(num);

	while (num) {
		reverseNum = reverseNum * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	if (isNegative) {
		reverseNum *= -1;
	}
	return reverseNum;
}

reverseNumber(345)