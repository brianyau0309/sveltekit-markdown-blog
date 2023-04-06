/**
 * Curry a function
 * @param {Function} fn Function
 * @returns {Function} Curried function
 */
export default (fn) =>
	/**
	 * @param {...*} args
	 * @returns {Function | *} Pre-filled function or function result
	 */
	function curried(...args) {
		if (typeof fn !== 'function') throw new Error('fn is not a function');
		return args.length >= fn.length ? fn(...args) : (...moreArgs) => curried(...args, ...moreArgs);
	};
