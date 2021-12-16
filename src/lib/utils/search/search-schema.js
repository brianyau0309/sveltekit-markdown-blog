import {
	searchRelated,
	defaultSort,
	defaultPagination,
	searchQueryParser
} from '$utils/search';

const searchSchema = (pageNumber = 1) => ({
	filter: { fn: ({ metadata }) => !metadata.draft },
	sort: { fn: defaultSort },
	pagination: {
		fn: defaultPagination,
		opts: {
			increment: true,
			number: pageNumber,
			size: 10
		}
	},
	parser: {
		fn: searchQueryParser,
		opts: {
			tag: true,
			category: true
		}
	},
	searcher: {
		fn: searchRelated,
		opts: {
			keepNotRelated: false,
			fields: {
				all: {
					paths: [
						{ path: 'metadata.title', exact: false },
						{ path: 'metadata.description', exact: false },
						{ path: 'metadata.tags' },
						{ path: 'metadata.category' }
					]
				},
				tag: {
					paths: [{ path: 'metadata.tags' }],
					relevance: 5
				},
				category: {
					paths: [{ path: 'metadata.category' }],
					relevance: 100
				}
			}
		}
	}
});

export default searchSchema;
