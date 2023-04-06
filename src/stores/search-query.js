import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';

const createSearchQuery = (prop, pathname = null) => {
	if (browser) {
		let searchQuery = null;

		return {
			subscribe: (set) =>
				page.subscribe(({ url }) => {
					set(url.searchParams?.get(prop));
				}),
			set: (value, { replaceState = false } = {}) => {
				/* Don't update if same as incoming value */
				if (searchQuery === value) return;
				searchQuery = value ?? '';
				const params = new URLSearchParams(location.search);
				/* Remove ?q= if searchQuery not found */
				if (searchQuery) params.set(prop, searchQuery);
				else params.delete(prop);
				/* Form path, redirect to path and push to history */
				const query = params.toString();
				pathname = pathname ? pathname : location.pathname;
				const fullPath = `${pathname}${query ? `?${query}` : ''}`;
				goto(fullPath, { keepFocus: true, replaceState, noScroll: true });
			}
		};
	}
};

export const searchQuery = createSearchQuery('q', '/');
