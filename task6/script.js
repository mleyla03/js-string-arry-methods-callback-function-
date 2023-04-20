function isEqual(one,two) {
	if (one.length != two.length)
		return "False";
	else {

		for (var i = 0; i < one.length; i++)
			if (one[i] != two[i])
				return "False";
		return "True";
	}
}
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) 
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) 
console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))