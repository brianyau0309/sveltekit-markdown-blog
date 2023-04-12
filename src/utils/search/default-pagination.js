/**
 * Pagination
 * @param {Number} pageNumber Number of page
 * @param {Number} pageSize Number of item in a page
 * @returns {Array.<Number>} [StartIndex, EndIndex]
 */
const defaultPagination = ({ number, size, increment }) => [
	increment ? 0 : (number - 1) * size,
	number * size
];

export default defaultPagination;
