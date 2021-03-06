// 方法1：while循环
function factorialize(num) {
  var result = 1;
  while(num) {
    result *= num;
    num --;
  }
  return result;
}

// 方法2：递归
function factorialize(num) {
  if(num <= 0) {
  	return 1;
  }
  return num*arguments.callee(num - 1);
}