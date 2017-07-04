```js
// Basic Code Solution
// 思路：找出最大和最小值然后循环

function sumAll1(arr) {
  let maxNum = Math.max(arr[0], arr[1]),
      minNum = Math.min(arr[0], arr[1]),
      sum = 0
  
  for(let i = minNum; i <= maxNum; i++) {
    sum += i
  }
  
  return sum
}

sumAll1([5, 10]);

// Advanced Code Solution

function sumAll2(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
	return sum;
}

sumAll2([1, 4]);

// Intermediate Code Solution
// 思路：利用等差数列求和公式

function sumAll3(arr) {
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

sumAll3([1, 4]);
```