var arr = new Array(40);

function fillArray() {
	arr = arr.fill().map(() => Math.round(Math.random() * 200) - 100)
	console.log(arr)
}

function replaceFromArray () {
	arr = arr.map((val) => val < 0 ? 0 : val)
	console.log(arr)
}

function addToArray() {
	let arr2 = arr.slice()
		count = 0
	arr2.forEach((val, index) => {
		if (index % 2 == 0 && val == 0)  { 
			arr.splice(index + count + 1, 0, -1)
			count++ 
		}
	})
	console.log(arr)
}

fillArray()
replaceFromArray()
addToArray()