const model = require('./model.js');
const collection = model.model;
const modelLength = collection.length;

let resultCollection = [];

const findId = id => {
	let res = -1
	resultCollection.map((item, index) => {
		if (item.id == id && res == -1) res = index
	})
	return res
}

const addPosts = (indexName, indexPost) => {
	resultCollection[indexName].posts.push({
		id: collection[indexPost].id,
		title: collection[indexPost].title,
		text: collection[indexPost].text
	})
}

addCollection = (index) => {
	resultCollection.push({
		id: collection[index].user.id,
		name: collection[index].user.name,
		posts: [{
			id: collection[index].id,
			title: collection[index].title,
			text: collection[index].text
		}]
	})
}

const init = () => {
	for (let i = 0; i < modelLength; i++) {
		let indexItem = findId(collection[i].user.id)
		if (indexItem !== -1) {
			addPosts(indexItem, i);
		} else {
			addCollection(i)
		}
	}
	return resultCollection
}

//console.log(init())

module.exports.result = init()