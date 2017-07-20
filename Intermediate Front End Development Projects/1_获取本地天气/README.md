## 功能

- [x] 获取当地的天气

- [x] 显示对应的天气图标

- [x] 点击单位名切换摄氏度/华氏度

[DEMO](https://codepen.io/monad/pen/EXzbgx)

## 使用的天气 API

[Free Code Camp Weather API Pass-through](https://fcc-weather-api.glitch.me/)

## 要点

设置 async 为 false 可以让 ajax 获取的数据 data 传递到 ajax 函数之外用于调用

```js
var wData;

$.ajax({
	url: url,
	type: 'GET',
	async: false
})
.done(function(data) {
	wData = data;
	// do something
});

console.log(wData); // data
```

jQuery 自带的 $.param() 方法可以将 js 对象序列化成 URL 查询参数

```js
var obj = {name: 'Jack', age: 18};
$.param(obj); // name=Jack&age=18

var arr = [
  { name: "first", value: "Rick" },
  { name: "last", value: "Astley" },
  { name: "job", value: "Rock Star" }
]
$.param(arr); // first=Rick&last=Astley&job=Rock%20Star
```