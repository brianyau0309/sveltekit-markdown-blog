import { browser } from '$app/env';
import { writable } from 'svelte/store';

const persistStore = ({
	keyName,
	type = writable,
	defaultObj = {},
	storage = localStorage
} = {}) => {
	if (!keyName) throw new Error('Persist Store require a keyName');
	if (browser) {
		const history = storage.getItem(keyName);
		const store = type(history ? JSON.parse(history) : defaultObj);
		store.subscribe((json) => storage.setItem(keyName, JSON.stringify(json)));
		return store;
	}
	return type(defaultObj);
};

export default persistStore;
