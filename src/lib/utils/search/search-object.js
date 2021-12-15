import { isObject, objectPath } from '$utils/fp';
import { defaultSort, defaultPagination } from '$utils/search';

const getProps = (items, exact) => {
	if (Array.isArray(items))
		return items?.map((prop) => String(prop).toLowerCase()) ?? [];
	if (typeof items === 'string' && exact)
		return Array(items).map((prop) => String(prop).toLowerCase());
	return String(items).toLowerCase();
};

const searchRelated = (items, search, schema) => {
	const { fields, keepNotRelated = false } = schema;
	let result = [];
	for (const item of items) {
		let relevance = 0;
		for (const key in search) {
			if (!(key in fields)) continue;
			for (const { path, exact = true } of fields[key].paths) {
				const props = getProps(objectPath(item, path), exact);
				for (const searchKey of search[key]) {
					if (!props.includes(searchKey.toLowerCase())) continue;
					relevance += fields[key]?.relevance ?? 1;
				}
			}
		}
		if (relevance || keepNotRelated) result.push({ ...item, relevance });
	}
	return result;
};

/**
 * Search items by object
 * @param {Array} items The query string
 * @param {Object} search search params
 * @param {Object} schema search schema
 * @returns {Array}
 */
const searchObject = (items, search, schema) => {
	// FIXME: Please refactor this shit
	const {
		pageNumber = 1,
		pageSize = 10,
		sort = defaultSort,
		pagination = defaultPagination
	} = schema;
	if (!isObject(search) || (isObject(search) && !Object.keys(search).length))
		return items.sort(sort).slice(...pagination(pageNumber, pageSize));

	const relatedItems = searchRelated(items, search, schema);

	return relatedItems.sort(sort).slice(...pagination(pageNumber, pageSize));
};

export default searchObject;
