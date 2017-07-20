// 要求：判断数组 collection 里的每个对象都含有 pre 的值

function truthCheck(collection, pre) {
  
  return collection.every(function(obj) {
    return obj[pre];
  });
  
}

// 例：返回 false
truthCheck([
	{"user": "Tinky-Winky", "sex": "male", "age": 0},
	{"user": "Dipsy", "sex": null, "male", "age": 3},
	{"user": "Laa-Laa", "sex": "female", "age": 5},
	{"user": "Po", "sex": "female", "age": 4}
],"sex");