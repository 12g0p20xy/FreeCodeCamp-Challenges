// 要求：生成一个斐波那契数列，最大的值不能大于 num，然后输出数列中所含所有奇数之和
// 斐波那契数列：[1, 1, 2, 3, 5, 8, ...]

function sumFibs(num) {
  
  var tempArr = [1],
      preNum = 1;
  
  // 获取所需的数组
  for(var i=1; i<=num;) {
    if(i % 2) {
      tempArr.push(i);
    }
    i += preNum;
    preNum = i - preNum;
  }
  
  // 求和
  return tempArr.reduce(function(sum, n) {
    return sum += n;
  });
  
}