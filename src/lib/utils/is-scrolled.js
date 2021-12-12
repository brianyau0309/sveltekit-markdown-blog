/**
 * Check a DOM Element is scrolled or not
 * @param {Element} element DOM Element
 * @param {{ x: boolean, y: boolean }} options x-axis and y-axis
 * @returns {boolean} isScrolled
 */
const isScrolled = ({ scrollTop, scrollLeft }, { x = true, y = true } = {}) =>
	(x && !!scrollLeft) || (y && !!scrollTop);

export default isScrolled;
