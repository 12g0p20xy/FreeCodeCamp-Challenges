/*
说明：给 whatIsInAName() 
传入2个参数，一个对象集合和一个对象：
whatIsInAName([{..}, {..}, {..}], {key: value, key2: value})
输出完全匹配后一个对象的集合
*/

function whatIsInAName(collection, source) {
	
	var arr = [];
	
	var sKey = Object.keys(source); // Object.keys(obj) 输出对象的属性数组

	arr = collection.filter(function(obj) {

		for (var i = 0; i < sKey.length; i++) {

			if ( obj[sKey[i]] !== source[sKey[i]] || !obj.hasOwnProperty(sKey[i]) ) {
				return false;
			}

		}

		return true;

	});
	
	return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

// [{ "a": 1, "b": 2, "c": 2 }]