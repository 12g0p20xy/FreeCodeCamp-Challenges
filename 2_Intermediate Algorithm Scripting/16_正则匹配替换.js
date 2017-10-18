// 将大写字母、下划线、空格分割的单词替换为减号分割，且全部转化为小写

function spinalCase(str) {
  var pattern = /_|\s|(?=[A-Z])/g;
  return str.split(pattern).join('-').toLowerCase();
}

spinalCase("This Is Spinal Tap");     // this-is-spinal-tap
spinalCase("thisIsSpinalTap");        // this-is-spinal-tap
spinalCase('The_Andy_Griffith_Show'); // the-andy-griffith-show
spinalCase("AllThe-small Things");    // all-the-small-things