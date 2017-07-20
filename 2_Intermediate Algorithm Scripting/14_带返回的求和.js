/*
要求：
  addTogether(2, 3)    返回 5
  addTogether(2)(3)    返回 5
  addTogether(2, "3")  返回 undefined
*/


function addTogether() {
  
  var a = arguments[0],
      b = arguments[1];
  
  if(arguments.length === 2) {
    var sum = a + b;
    // 判断传入参数是否都为数字
    if(typeof sum === 'number') {
      return sum;
    }
  }
  
  else if(arguments.length === 1) {
    
    // 判断传入参数是否为数字
    if(typeof a === 'number') {
      // 返回一个方法，并保留第一个参数
      return function(x) {
        var sum = x + a;
        if(typeof sum === 'number') {
          return sum;
        }
      };
    }
    
  }
  
}


// 方案2

function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}