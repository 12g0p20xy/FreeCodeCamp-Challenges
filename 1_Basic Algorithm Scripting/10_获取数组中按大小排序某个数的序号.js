/* 例如 getIndexToIns([10, 20, 30, 40, 50], 35) 应该输出 3
   在数组 [10, 20, 30, 40, 50] 中按大小排序 35 应该放在序号为 3 的位置
   需要注意传入的数组 arr 并不一定已经按大小顺序排好
*/

function getIndexToIns(arr, num) {
  
  // 过滤掉比 num 大的
  var newArr = arr.filter(function(item) {
    return item < num;
  });
  
  // 排序 newArr
  newArr.sort(function(a, b) {
    return a - b;
  });
  
  console.log(newArr);
  
  // 获得序号
  return newArr.length;
  
}

getIndexToIns([5, 3, 20, 3], 5) // 2