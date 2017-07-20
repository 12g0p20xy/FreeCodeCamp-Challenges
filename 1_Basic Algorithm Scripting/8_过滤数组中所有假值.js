// 过滤掉 false, null, 0, "", undefined, NaN

function bouncer(arr) {
  return arr.filter(function(item) {
    return item;
  });
}

bouncer([7, "ate", "", false, 9]);