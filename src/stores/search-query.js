import { browser } from '$app/env';
import { writable } from 'svelte/store';

/* FIXME: History issues
 * Go back history with search query won't change the store
 * Should change the store and list appropriate results
 */
const createSearchQuery = () => {
	if (browser) {
		const { subscribe, set } = writable(null);

		subscribe((searchQuery) => {
			const params = new URLSearchParams(location.search);
			const q = params.get('q');
			if (searchQuery === null && q) searchQuery = q;
			if (searchQuery !== q) {
				if (!searchQuery) params.delete('q');
				else params.set('q', searchQuery);
				const query = params.toString();
				window.history.pushState(
					window.history.state,
					'',
					`${location.pathname}${query ? `?${query}` : ''}`
				);
			}
		});

		return { subscribe, set, reset: () => set(null) };
	}
};

export const searchQuery = createSearchQuery();
