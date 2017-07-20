// 例如 destroyer([1, 2, 3, 1, 2, 3], 2, 3) 返回 [1, 1]

function destroyer(arr) {
  
  // 获得需要比对的参数数组（arguments 不能直接用 slice）
  var key = [].slice.call(arguments, 1);
  
  return arr.filter(function(item) {
    return !key.includes(item);
  });
  
}