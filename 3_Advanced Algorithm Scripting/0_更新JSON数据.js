/* 要求：

写一个 updateRecords 方法修改 collection，collection 是一个包含了许多唱片信息的 JSON 数据。

传入3个参数 updateRecords(id, prop, value)：

id 用来找到某个唱片；

当 prop 为 "tracks" 且 value 不为空，把 prop 添加到 "tracks" 最后一行；

当 prop 为 "tracks" 且 value 不为空，对象中并没有 "tracks"，则创建一个 "tracks" 并添加 prop；

当 prop 不为 "tracks" 且 value 不为空，修改 prop 的值；

当 value 为 ""，删除当前的 prop

*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  
  // 通过 id 找到对象
  var item = collection[id];
  
  // value 有值
  if(value) {
    
    // 判断 prop 是否是 tracks
    if(prop === 'tracks') {
      // 如果没有 tracks 属性则创建一个
      if(!item[prop]) {
        item[prop] = [];
      }
      item[prop].push(value);
    }
    
    else {
      item[prop] = value;
    }
    
  }
  
  // value 为空
  else {
    delete item[prop];
  }
  
  return collection;
  
}

// Alter values below to test your code
updateRecords(2548, "tracks", "");