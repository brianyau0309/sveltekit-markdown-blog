/**
 * Parser query string to object
 * @param {String} query The query string
 * @param {Object} schema parser schema
 * @returns {Object}
 */
const searchQueryParser = (query, schema = {}) => {
	// FIXME: Please refactor this shit
	const result = {};
	if (!query) return result;
	const queryArray = query.split(' ');
	for (const q of queryArray) {
		const values = q.split(':');
		if (values.length > 1) {
			const config = schema[values[0]];
			if (config) {
				if (!result[values[0]]) result[values[0]] = [];
				result[values[0]] = [
					...result[values[0]],
					...values[1].split(',').flat()
				];
			} else if (values[0]) {
				if (!result.all) result.all = [];
				result.all?.push(values[0]);
			}
		} else if (values[0]) {
			if (!result.all) result.all = [];
			result.all?.push(values[0]);
		}
	}

	return result;
};

export default searchQueryParser;
