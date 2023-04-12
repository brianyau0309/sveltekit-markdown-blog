/**
 * Check a DOM Element is scrolled to the end
 * @param {Element} element DOM Element
 * @param {{ x: boolean, y: boolean }} options x-axis and y-axis
 * @returns {boolean} isScrollEnd
 */
const isScrolled = (
	{ scrollTop, scrollHeight, offsetHeight, scrollLeft, scrollWidth, offsetWidth },
	{ x = true, y = true } = {}
) =>
	(x && offsetWidth + scrollLeft >= scrollWidth) || (y && offsetHeight + scrollTop >= scrollHeight);

export default isScrolled;
