/**
 * Check a DOM Element is overflown or not
 * @param {Element} element DOM Element
 * @param {{ x: boolean, y: boolean }} options x-axis and y-axis
 * @returns {boolean} isOverflown
 */
const isOverflown = (
	{ clientWidth, clientHeight, scrollWidth, scrollHeight },
	{ x = true, y = true } = {}
) => (x && scrollWidth > clientWidth) || (y && scrollHeight > clientHeight);

export default isOverflown;
