/**
 * Sort blog post by relevance & date
 * @param {Object} a Blog post a
 * @param {Object} b Blog post b
 * @returns {Number}
 */
const defaultSortHandler = (a, b) => {
	const compareRelevance = (b.relevance ?? 0) - (a.relevance ?? 0);
	if (compareRelevance !== 0) return compareRelevance;
	const aDate = a.metadata.lastUpdated ?? a.metadata.createdAt;
	const bDate = b.metadata.lastUpdated ?? b.metadata.createdAt;
	const getTime = (dateString) => new Date(dateString).getTime();
	return getTime(bDate) - getTime(aDate);
};

export default defaultSortHandler;
