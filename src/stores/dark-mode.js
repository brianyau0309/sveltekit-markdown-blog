import { browser } from '$app/environment';
import { persistStore } from '$utils';

const createDarkMode = () => {
	if (browser) {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const { subscribe, update } = persistStore({
			keyName: 'darkMode',
			/* Depends on prefers-color-scheme */
			defaultObj: { active: prefersDark ? true : false }
		});

		subscribe((darkMode) => {
			const htmlTag = document.documentElement.classList;
			if (darkMode.active) htmlTag.add('dark');
			else htmlTag.remove('dark');
		});

		return {
			subscribe,
			toggle: () => update((darkMode) => ({ ...darkMode, active: !darkMode.active }))
		};
	}
};

export const darkMode = createDarkMode();
