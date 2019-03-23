/**
 * 基本用法
 *  s1.async/await基本用法；
 *
 */
function testAPI01() {
	//debugger;
	let pr0 = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("resolve task finish...");
			console.log("resolve task finish...")
		}, 1000);
	});

	let pr1 = new Promise(function(resolve, reject) {
		setTimeout(function() {
			reject("reject task finish...");
			console.log("reject task finish...")
		}, 2000)
	});

	// 结果是promise对象
	let res = runAsyncTask();
	// async的异步任务不会阻塞到这里
	console.log("testAPI01 task finish..." + res);

	/**
	 * 执行异步操作
	 * @returns {Promise<void>}
	 */
	async function runAsyncTask() {
		// 在这里等待异步任务执行完成
		let res0 = await pr0;
		console.log(res0);
		try {
			// promise执行结果返回到这里res1
			let res1 = await pr1;
			console.log(res1);
		} catch (ev) {
			console.log(ev);
		}
		console.log("async task finish...")
	}
}

module.exports = {
	testAPI01
}
