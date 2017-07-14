// 要求：检查句子 str 的结尾是否和 target 相同

function confirmEnding(str, target) {
  
  // 获取 target 的长度
  var l = target.length;
  
  // 去掉 str 所含的的空格
  var str2 = str.split(' ').join('');
  
  // 获取 str 用于比对的最后一段字符
  var checkStr = str2.slice(str2.length - l, str2.length);
  
  if(checkStr === target) {
    return true;
  }
  
  return false;
  
}

confirmEnding("Bastian", "n"); // true
confirmEnding("He has to give me a new name", "name"); // true