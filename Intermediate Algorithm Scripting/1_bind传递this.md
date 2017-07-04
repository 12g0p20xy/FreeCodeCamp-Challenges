```js
// 通常方法传递 this

var Person = {

	name: 'Jack',

	getName: function() {
		console.log(this.name)
	},

	getAsyncData: function(cb) {
		cb()
	},

	render: function() {
		let _this = this
		this.getAsyncData(function() {
			_this.getName()
		})
	}

}

Person.render()

// 不使用 _this = this 而使用 .bind()

var Person2 = {

	name: 'Jack',

	getName: function() {
		console.log(this.name)
	},

	getAsyncData: function(cb) {
		cb()
	},

	render: function() {
		this.getAsyncData(function() {
			this.getName()
		}.bind(this))
	}

}

Person2.render()
```