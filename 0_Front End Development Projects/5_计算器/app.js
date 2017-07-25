new Vue({
	el: '#app',
	data: {
		result: '0',		// 最终的计算结果
		current: '0',		// 显示当前按下的数字或运算符，传递给运算式
		equation: '0',	// 字符串形式记录当前算式（最后用 eval 计算结果）
		answer: false	// 判断是否按下等于运算
	},
	methods: {
		// 数字键，按一次将数字加到当前数字的个位
		updateNum(num) {
			// 已经按下了等于号后再按数字键则重新开始运算
			if (this.answer) {
				this.answer = false
				this.result = '0'
				this.current = '0'
				this.equation = '0'
			}
			// 如果之前 current 中存储的是符号则清空 current
			if (isNaN(this.current)) {
				this.current = '0'
			}
			// 不能重复输入小数点
			if (num === '.' && this.equation.split('').includes('.')) {
				return false
			}
			// 判断数字位数是否超出限制
			if (this.current.length >= 10) {
				this.current = '0'
				this.equation = '超出限制'
				this.answer = true
			}
			this.current = this.current === '0' ? num : this.current + num
			this.equation = this.equation === '0' ? num : this.equation + num
			
		},
		// AC键，清除算式和结果
		allClear() {
			this.current = '0'
			this.result = '0'
			this.equation = '0'
			this.answer = false
		},
		// CE键，清除当前数字，不清除之前的算式
		clearEntry() {
			this.equation = this.equation.replace(this.current, '')
			this.current = '0'
			if (this.answer) {
				this.answer = false
				this.equation = '0'
			}
			
		},
		// 运算符
		operator(str) {
			// 运算符只可以输入一次
			if (this.current !== str) {
				this.equation += str
			}
			// 已经按下等于号后再按运算符可以返回继续运算
			if (this.answer) {
				this.equation = this.result + str
				this.answer = false
			}
			this.current = str
		},
		// 等于号运算
		getResult() {
			// 不允许重复计算
			if (this.equation && !this.answer) {
				// 计算出结果
				var temp = eval(this.equation)
				// 判断结果是否为小数，是小数则取前两位
				if (parseInt(temp) !== 'number') {
					temp = Math.round(temp * 100) / 100
				}
				// temp 由数字转换成字符串
				temp += ''
				// 判断数字位数是否超出限制
				if (temp.length >= 10) {
					this.current = '0'
					this.result = '0'
					this.equation = '超出限制'
				}
				else {
					this.result = temp
					this.equation += '=' + this.result
					this.current = '0'
				}
				this.answer = true
			}
		},
	}
})
