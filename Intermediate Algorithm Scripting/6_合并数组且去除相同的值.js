function uniteUnique() {
  
  var tempArr = [],
      targetArr = [];
  
  // 所有参数合并成一个数组 tempArr
  for(var i=0; i<arguments.length; i++) {
     tempArr.push(arguments[i]);
  }
  
  // 使用 reduce 合并 tempArr 里的所有数组
  targetArr = tempArr.reduce(function(preArr, nextArr) {
    return preArr.concat(nextArr.filter(function(val) {
      // 如果前一个数组含有后一个数组中的某个值则不再传入
      return !preArr.includes(val);
    }));
  });
  
  return targetArr;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]