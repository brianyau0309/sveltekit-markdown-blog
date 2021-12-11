/**
 * Check a DOM Element is scrolled or not
 * @param {Element} element DOM Element
 * @param {{ x: boolean, y: boolean }} options x-axis and y-axis
 * @returns {boolean} isOverflown
 */
const isScrolled = ({ scrollTop, scrollLeft }, { x = true, y = true } = {}) =>
	(x && !!scrollTop) || (y && !!scrollLeft);

export default isScrolled;
