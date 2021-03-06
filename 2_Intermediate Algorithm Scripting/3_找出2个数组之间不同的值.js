// Basic Code Solution
// 思路：使用 indexOf() 来判断是否存在

function diffArray(arr1, arr2) {
  var newArr = [];
  
  function onlyInFirst(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  
  // 由于不知道 arr1 和 arr2 的长度所以要循环比对2次
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  
  return newArr;
}

// Intermediate Code Solution
// 思路：先合并2个数组，再用 includes() 判断

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);