/**
 * 基本用法
 *  s1.箭头函数
 *
 */
function testAPI03() {
	debugger;
	new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve("resolve task finish...")
		}, 3000);

		setTimeout(function() {
			reject("reject task finish...")
		}, 1000)
	}).then(function(res) {
		console.log(res)
	}).catch(function(err) {
		console.log(err)
	}).finally(function(res) {
		console.log(res)
	})
}

/**
 * 基本用法
 *  s1.链式用法
 *
 */
function testAPI02() {
	debugger;
	new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("resolve task finish...")
		}, 3000);

		setTimeout(function() {
			reject("reject task finish...")
		}, 1000)
	}).then(function(res) {
		console.log(res)
	}).catch(function(err) {
		console.log(err)
	}).finally(function(res) {
		console.log(res)
	})
}

/**
 * 基本用法
 *  s1.创建promise对象
 *      new Promise( function(resolve, reject) {...} // executor   )
 *  s2.添加异步后的回调：
 *      Promise.prototype.then(onFulfilled, onRejected)
 *      promise.then()  // 执行了resolve
 *      Promise.prototype.catch(onRejected)
 *      promise.catch() // 执行了reject，与resolve中仅有一个会被执行
 *      Promise.prototype.finally(onFinally)
 *      promise.finally()   // 类似java
 *
 */
function testAPI01() {
	debugger;
	let pr0 = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("resolve task finish...")
		}, 1000);

		setTimeout(function() {
			reject("reject task finish...")
		}, 1000)

	});

	pr0.then(function(res) {
		console.log(res)
	}).catch(function(err) {
		console.log(err)
	}).finally(function(res) {
		console.log(res)
	})
}

/**
 * 基本用法
 *  s1.Promise.all
 *
 */
function testAPI06() {
	//debugger;
	console.log(new Date().valueOf())
	let pr0 = new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('pr0' + new Date().valueOf())
			resolve("resolve task finish..." + 3000)
		}, 3000);
	});
	let pr1 = new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('pr1' + new Date().valueOf())
			resolve("resolve task finish..." + 1000)
		}, 1000)
	});
	let pr2 = new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('pr2' + new Date().valueOf())
			resolve("resolve task finish..." + 5000)
		}, 5000)
	});
	Promise.all([pr0, pr1, pr2]).then(function(values) {
		console.log(new Date().valueOf())
		console.log(values)
	}).catch(function(err) {
		console.log(err)
	})
}

/**
 * Promise API测试页面
 *  Intent:
 *   1.了解promise的用途；
 *      Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口，支持链式操作；
 *   2.promise的基本用法与API；
 *      @see testAPI01 基本API
 *      @see testAPI02 链式调用
 *      @see testAPI03 使用箭头函数
 *      @see testAPI04 Promise.all
 *   3.应用场景
 *      执行异步操作，降低代码耦合；
 *   6.promise的工作机制；
 *      promise解决了异步编程的异步回调嵌套问题(回调地狱)，实现代码的编程解耦，
 *      但本质上promise还是属于js的单线程模型执行；
 *      Promise的状态：
 *          Pending：异步操作未完成，初始状态；
 *          Fulfilled：异步操作成功；
 *          Rejected：异步操作失败；
 *   7.兼容性
 *      Promise IE不支持
 *   ref:
 *      MDN Promise
 *      https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *      http://javascript.ruanyifeng.com/advanced/promise.html
 *
 *
 */
module.exports = {
	testAPI01,
	testAPI02,
	testAPI03,
	testAPI06
}
