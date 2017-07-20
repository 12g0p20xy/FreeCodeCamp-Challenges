// ROT13：字母表往后移动13位为解密后的文字

// 方法1
function rot13(str) {
  
  var newWords = '';
  
  for(var i=0; i<str.length; i++) {

    // 获取每个字母的编码
    var code = str.charCodeAt(i);

    // 向后位移13（ROT13）
    if(code >= 65 && code <= 90) {
      code += 13;
      if(code > 90) {
        code -= 26;
      }
    }

    // 转换成字母
    newWords += String.fromCharCode(code);

  }
  
  return newWords;
  
}

rot13("LBH QVQ VG!"); // YOU DID IT!


// 方法2

function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}