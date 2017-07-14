// 要求：输出不大于 num 的所有质数之和
// 质数：大于1的自然数中，除了1和它本身以外不再有其他因数

function sumPrimes(num) {

	// 生成一个小于 num 的自然数数列 [2, 3, ...]
  var tempArr = [];
  for(var i=2; i<=num; i++) {
  	tempArr.push(i);
  }

  // 过滤掉不是质数的数，注意这里 i 要从 2 开始循环判断
  tempArr = tempArr.filter(function(x) {
  	for(var i=2; i<x; i++) {
  		if (x % i === 0) {
  			return false;
  		}
  	}
  	return true;
  });

  // 求和
  return tempArr.reduce(function(sum, a) {
  	return sum += a;
  });

}