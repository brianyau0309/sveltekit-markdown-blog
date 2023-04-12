/**
 * Parser query string to object
 * @param {String} query The query string
 * @param {Object} schema parser schema
 * @returns {Object}
 */
const searchQueryParser = (query, schema = {}) => {
	const result = {};
	if (!query) return result;
	const queryArray = query.split(' ');
	for (const q of queryArray) {
		const values = q.split(':');
		/* Have prefix separate by ':' */
		if (values.length > 1 && schema[values[0]]) {
			if (!result[values[0]]) result[values[0]] = [];
			result[values[0]] = [...result[values[0]], ...values[1].split(',').flat()];
			/* No prefix */
		} else if (values[0]) {
			if (!result.all) result.all = [];
			result.all?.push(values[0]);
		}
	}

	return result;
};

export default searchQueryParser;
