new Vue({
	el: '#app',
	data: {
		breakTime: 5,		// 用于显示页面上设置的时间
		workTime: 10,		// 用于显示页面上设置的时间
		status: true,		// 当前状态，工作时间为 true，休息时间为 false
		t: null, 				// 间歇调用的计时器
		tTemp: 600 			// 存储倒计时中的临时时间
	},
	computed: {
		// 倒计时的时间格式化为 0: 00 格式的字符串
		timer() {
			var min = parseInt(this.tTemp / 60),
					s = (this.tTemp % 60 + '').length == 1 ? '0' + (this.tTemp % 60) : (this.tTemp % 60)
			return min + ': ' + s
		}
	},
	methods: {
		add(str) {
			if (str === 'work') {
				this.workTime ++
			}
			if (str === 'break') {
				this.breakTime ++
			}
			// 在设置时间的时候判断当前倒计时的状态（工作/休息）来对应赋值
			this.tTemp = this.status ? this.workTime * 60 : this.breakTime * 60
			// 修改时间的时候停止倒计时
			if (this.t) {
				clearInterval(this.t)
				this.t = null
			}
		},
		minus(str) {
			if (str === 'work') {
				if(this.workTime == 1) {
					this.workTime = 1
				}
				else {
					this.workTime --
				}
			}
			if (str === 'break') {
				if(this.breakTime == 1) {
					this.breakTime = 1
				}
				else {
					this.breakTime --
				}
			}
			this.tTemp = this.status ? this.workTime * 60 : this.breakTime * 60
			if (this.t) {
				clearInterval(this.t)
				this.t = null
			}
		},
		counter() {
			// 如果还没有倒计时，则创建倒计时
			if (!this.t) {
				var _this = this
				this.t = setInterval(function() {
						_this.tTemp --
						// 倒计时为 0 转换状态并且重新给计时器赋值
						if (_this.tTemp == 0) {
							_this.status = !_this.status
							if (_this.status) {
								_this.tTemp = _this.workTime * 60
							}
							else {
								_this.tTemp = _this.breakTime * 60
							}
						}
				}, 1000)
			}
			// 已经有倒计时，则停止倒计时
			else {
				clearInterval(this.t)
				this.t = null
			}
		}
	}
})