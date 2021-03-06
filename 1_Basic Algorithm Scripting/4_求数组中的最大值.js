// 方法1：reduce()

function largestNum(arr) {
    return arr.reduce(function(prev, current) {
      return (current > prev) ? current : prev
    })
}

// 方法2：Math.max()

function largestNum2(arr) {
	let result = null
	for (var i = 0; i < arr.length; i++) {
		result = Math.max(arr[i], result)
	}
	return result
}

// 方法3：apply()

function largestNum3(arr) {
	return Math.max.apply(null, arr)
}