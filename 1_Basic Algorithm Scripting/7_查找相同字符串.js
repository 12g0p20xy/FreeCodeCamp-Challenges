// 判断前一个字符串中是否包含后一个字符串的所有字母，忽略大小写
// 例如 ["Mary", "Aarmy"] 返回 true; ["hello", "hey"] 返回 false

// 方法1

function mutation(arr) {
  var first = arr[0].toLowerCase().split(''),
      second = arr[1].toLowerCase().split('');
  for(var i=0; i<second.length; i++) {
    if(!first.includes(second[i])) {
      return false;
    }
  }
  return true;
}

// 方法2

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
