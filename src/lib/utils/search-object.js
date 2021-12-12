import { isObject, objectPath } from '$utils';

/**
 * Search items by object
 * @param {Array} items The query string
 * @param {Object} search search params
 * @param {Object} schema search schema
 * @returns {Array}
 */
const searchObject = (items, search, schema) => {
	// TODO: add pagination
	// FIXME: Please refactor this shit
	let result = [];
	if (!isObject(search)) return result;
	if (isObject(search) && Object.keys(search).length === 0) return items;

	for (const item of items) {
		let relevance = 0;
		for (const key in search) {
			if (key in schema) {
				const paths = schema[key].paths;
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
							relevance += schema[key]?.relevance ?? 1;
						}
					}
				}
			}
		}
		if (relevance) result.push({ ...item, relevance });
	}
	return result;
};

export default searchObject;
