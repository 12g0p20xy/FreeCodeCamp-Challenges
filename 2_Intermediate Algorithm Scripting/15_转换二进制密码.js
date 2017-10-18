// 要求：传入一段二进制字符串，转换成对应的英文句子

function binaryAgent(str) {
  newArr = str.split(' ');
  // 转成十进制
  newArr = newArr.map(function(n) {
    return parseInt(n, 2);
  });
  // 转成字母
  newArr = newArr.map(function(x) {
    return String.fromCharCode(x);
  });
  return newArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// Aren't bonfires fun!?
