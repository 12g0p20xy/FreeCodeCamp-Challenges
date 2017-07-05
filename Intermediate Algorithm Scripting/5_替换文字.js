// 用 after 替换掉字符串中 before 的文字并且判断首字母是否大写

function myReplace(str, before, after) {

  return str.replace(before, function() {
	// 判断首字母是否大写
    if(/[A-Z]/.test(before.slice(0, 1))) {
      // 转换首字母大写
      return after.slice(0, 1).toUpperCase() + after.slice(1);
    }
    return after;

  });

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// "He is Sitting on the couch"