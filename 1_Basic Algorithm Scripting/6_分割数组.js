/* 将 arr 按照 size 来分割成新数组
	例如 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
	返回 [[0, 1, 2], [3, 4, 5], [6]]
*/

function chunkArrayInGroups(arr, size) {
  var result = [];
  for(i=0; i<arr.length;) {
    result.push(arr.slice(i, i + size));
    i += size;
  }
  return result;
}