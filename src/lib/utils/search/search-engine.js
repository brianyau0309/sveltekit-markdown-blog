import { isObject, compose, doNothing } from '$utils/fp';

/**
 * Search object in objects
 * @param {Array} items The query string
 * @param {Object} searchQuery search query
 * @param {Object} schema search schema
 * @returns {Array}
 */
const searchEngine = (items, searchQuery, schema) => {
	const { filter, sort, pagination, parser, searcher } = schema;
	const search = parser.fn(searchQuery, parser.opts);
	const searchFlow = compose(
		pagination
			? (arr) => arr.slice(...pagination.fn(pagination.opts))
			: doNothing,
		sort ? (arr) => arr.sort(sort.fn) : doNothing,
		filter ? (arr) => arr.filter(filter.fn) : doNothing
	);
	if (!isObject(search) || (isObject(search) && !Object.keys(search).length))
		return searchFlow(items);

	return searchFlow(searcher.fn(items, search, searcher.opts));
};

export default searchEngine;
