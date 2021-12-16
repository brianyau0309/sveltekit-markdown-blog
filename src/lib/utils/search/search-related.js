import { objectPath } from '$utils/fp';

const getProps = (items, exact) => {
	if (Array.isArray(items))
		return items?.map((prop) => String(prop).toLowerCase()) ?? [];
	if (typeof items === 'string' && exact)
		return Array(items).map((prop) => String(prop).toLowerCase());
	return String(items).toLowerCase();
};

const searchRelated = (
	items,
	search,
	{ fields, keepNotRelated = false } = {}
) => {
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

export default searchRelated;
