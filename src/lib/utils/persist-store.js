import { browser } from '$app/env';

const persistStore = ({
	key = 'key',
	type,
	defaultObj = {},
	storage = localStorage
} = {}) => {
	if (browser) {
		const history = storage.getItem(key);
		const store = type(history ? JSON.parse(history) : defaultObj);
		store.subscribe((json) => {
			storage.setItem(key, JSON.stringify(json));
		});
		return store;
	}
	return type(defaultObj);
};

export default persistStore;