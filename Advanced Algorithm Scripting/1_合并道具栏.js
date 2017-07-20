/*
要求：

写一个函数 updateInventory，传入2个数组参数 arr1 和 arr2；

arr1 和 arr2 代表2个道具包，内含一些道具和数量；

要求合并 arr2 的道具到 arr1，如果 arr1 和 arr2 含有相同道具则数量相加，如果 arr1 不含 arr2 的道具则新建物品；

最终输出 arr1 并按照字母表顺序排列道具

示例：

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);

输出：[[88,"Bowling Ball"], [2,"Dirty Sock"], [3,"Hair Pin"], [3,"Half-Eaten Apple"], [5,"Microphone"], [7,"Toothpaste"]]
*/


// 方案1

function updateInventory(arr1, arr2) {

  // 获取 arr2 中 arr1 没有的元素
  var diffArr = arr2.filter(function(item) {
    for(var i=0; i<arr1.length; i++) {
      if(arr1[i][1] === item[1]) {
        return false;
      }
    }
    return true;
  });
  
  // 获取 arr1 和 arr2 相同的部分并求和
  arr2.forEach(function(item) {
    for(var i=0; i<arr1.length; i++) {
      if(arr1[i][1] === item[1]) {
        arr1[i][0] += item[0];
      }
    }
  });
  
  arr1 = arr1.concat(diffArr);
  
  // 排序
  arr1.sort(function(a, b) {
    if(a[1] < b[1]) {
      return -1;
    }
    else if(a[1] > b[1]) {
      return 1;
    }
  });
  
  return arr1;
}

// 方案2

function updateInventory(arr1, arr2) {
  
  arr2.forEach(function(item) {
    
    var flag = 0;
    
    arr1.forEach(function(obj) {
      // 有相同的部分
      if(obj[1] === item[1]) {
        obj[0] += item[0];
        flag = 1;
      }
    });
    
    // 没有相同的部分
    if(flag === 0) {
      arr1.push(item);
    }
    
  });
  
  // 排序
  return arr1.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
  });
  
}