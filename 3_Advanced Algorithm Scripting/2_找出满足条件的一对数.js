/*
要求：
传入 pairwise(arr, arg)，找到 arr 中一对数的和等于 arg，并返回所有满足条件的数的序列之和

例如：
pairwise([7, 9, 11, 13, 15], 20) 返回 6；
因为有：7 + 13 = 20 和 9 + 11 = 20 这2种组合，于是 7、13、9、11 的序号之和为 0 + 3 + 1 + 2 = 6

另外，如果存在相同的组合则只取最小的那对序号：
例如 pairwise([1, 1, 1], 2) 应当返回 1
*/


function pairwise(arr, arg) {
  
  var sum = 0;
  
  arr.forEach(function(num) {
    var index = arr.indexOf(num);
    // 只循环比较 num 之后的数
    for(var i=index+1; i<arr.length; i++) {
      if(arr[i] + arr[index] === arg) {
        sum += i;
        sum += index;
        // 这里让已经满足条件的一对数变成 NaN，使其无法再被重复找到
        arr[i] = arr[index] = NaN;
      }
    }
  });
  
  return sum;
  
}