// 要求：逐次判断 arr 里每个数的值是否满足 func 的条件，不满足则从数组中去除，并当第一次满足条件时返回剩下的数组

function dropElements(arr, func) {
  
  // 这里需要事先储存原始 arr 的长度
  var times = arr.length;
  for(var i=0; i<times; i++) {
    if(func(arr[0])) {
      return arr;
    }
    arr.shift();
  }
  return arr;
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 3;});
// [4]