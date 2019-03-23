/**
 * 基本用法
 *  s1.Promise.all
 *
 */
function testAPI06() {
	//debugger;
	let pr0 = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve("resolve task finish..." + 5000)
		}, 5000);
	});
	let pr1 = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve("resolve task finish..." + 3000)
		}, 3000)
	});
	Promise.all([pr0, pr1]).then(function(values) {
		console.log(values)
	}).catch(function(err) {
		console.log(err)
	})
}
module.exports = {
	testAPI06
}
