function findLongestWord(str) {
  var words = str.split(' '),
      result = 0;
  for(var i=0; i<words.length; i++) {
     result = Math.max(words[i].length, result);
  }
  return result;
}

findLongestWord("The quick brown fox jumped over the lazy dog");