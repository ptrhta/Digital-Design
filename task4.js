function printTriangle(num) {
	let numOfStrings = num || 5;
	    numOfSpaces = numOfStrings - 1;
		str = '';
		count = 1;
 
	while (count <= numOfStrings) {
	    str = str.trim();
	    str = ' '.repeat(numOfSpaces) + str + (count > 1 ? ' ' : '') + '*';
	    console.log(str);
	    numOfSpaces--;
	    count++;
	}
}

printTriangle()