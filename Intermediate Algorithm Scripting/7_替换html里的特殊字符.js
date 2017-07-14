// 例如：convertHTML("Dolce & Gabbana") 返回 "Dolce &​amp; Gabbana"

// 方法1：使用 switch

function convertHTML(str) {

  var temp = str.split('');

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;

}

// 方法2：正则匹配

function convertHTML(str) {
  
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
  return str;

}

// 方法3：创建一个字典

function convertHTML(str) {

  htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };

  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');

}
