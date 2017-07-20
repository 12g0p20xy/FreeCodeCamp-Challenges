// 要求：例如传入 [1, [], [3, [[4]]]] 会输出 [1, 3, 4]

// 方案1

function steamrollArray(arr) {
  
  // tempArr 用于存储扁平后的数组
  var tempArr = [];
  function flatten(item) {
    if(!Array.isArray(item)) {
      tempArr.push(item);
    }
    else {
      for(var i in item) {
        // 递归
        flatten(item[i]);
      }
    }
  }
  
  // 开始扁平化
  arr.forEach(flatten);
  
  return tempArr;
      
}


// 方案2

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}