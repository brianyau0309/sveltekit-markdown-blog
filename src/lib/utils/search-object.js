import { isObject, objectPath } from '$utils';

const defaultSortHandler = (a, b) => {
	const compareRelevance = (b.relevance ?? 0) - (a.relevance ?? 0);
	if (compareRelevance !== 0) return compareRelevance;
	const aDate = a.metadata.lastUpdated ?? a.metadata.createdAt;
	const bDate = b.metadata.lastUpdated ?? b.metadata.createdAt;
	const getTime = (dateString) => new Date(dateString).getTime();
	return getTime(bDate) - getTime(aDate);
};

const defaultPagination = (pageNumber, pageSize) => [
	(pageNumber - 1) * pageSize,
	pageNumber * pageSize
];

/**
 * Search items by object
 * @param {Array} items The query string
 * @param {Object} search search params
 * @param {Object} schema search schema
 * @returns {Array}
 */
const searchObject = (items, search, schema) => {
	// FIXME: Please refactor this shit
	let result = [];
	const {
		fields,
		pageNumber = 1,
		pageSize = 10,
		sort = defaultSortHandler,
		pagination = defaultPagination
	} = schema;
	if (!isObject(search)) return result;
	if (isObject(search) && Object.keys(search).length === 0)
		return items.sort(sort).slice(...pagination(pageNumber, pageSize));

	for (const item of items) {
		let relevance = 0;
		for (const key in search) {
			if (key in fields) {
				const paths = fields[key].paths;
				for (const { path, exact = true } of paths) {
					const itemProps = objectPath(item, path);
					const props =
						typeof itemProps === 'string'
							? exact
								? Array(itemProps).map((prop) => String(prop).toLowerCase())
								: itemProps.toLowerCase()
							: itemProps?.map((prop) => String(prop).toLowerCase()) ?? [];
					for (const searchKey of search[key]) {
						if (props.includes(searchKey.toLowerCase())) {
							relevance += fields[key]?.relevance ?? 1;
						}
					}
				}
			}
		}
		if (relevance) result.push({ ...item, relevance });
	}
	return result.sort(sort).slice(...pagination(pageNumber, pageSize));
};

export default searchObject;
