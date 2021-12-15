/**
 * Pagination
 * @param {Number} pageNumber Number of page
 * @param {Number} pageSize Number of item in a page
 * @returns {Array.<Number>} [StartIndex, EndIndex]
 */
const defaultPagination = (pageNumber, pageSize) => [
	(pageNumber - 1) * pageSize,
	pageNumber * pageSize
];

export default defaultPagination;
