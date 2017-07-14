// 基础：如何求两个数的最大公约数（GCD）和最小公倍数（LCM）

// 求最大公约数
function gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

var GCD = gcd(10, 15); // 5

// 求最小公倍数 （ 最小公倍数 = 两个数的积 / 最大公约数 ）
var LCM = 10 * 15 / GCD // 30


/* ----------------- 分割线 ----------------------- */


// 要求：传入一个数组参数[a, b]，找到 a、b 之间所有数字的最小公倍数

// 方案1

function smallestCommons(arr) {
  
  // 先列出参数[a, b]之间所有的数
  var tempArr = [];
  for(var i=Math.max(arr[0], arr[1]); i>=Math.min(arr[0], arr[1]); i--) {
    tempArr.push(i);
  }
  

  // 用 gcd 函数求最大公约数，然后 最小公倍数 = 两个数的积 / 最大公约数
  function gcd(x, y) {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  }
  
  var result = tempArr.reduce(function(a, b) {
    if(a % b === 0) {
      return a;
    }
    return a * b / gcd(a, b);
  });
  
  return result;
  
}

// 方案2

function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var mltple = max;

  for(var i = max; i >= min; i--){
    if(mltple % i !== 0){
      mltple += max; 
      i = max;
    } 
  }

  return mltple;

}