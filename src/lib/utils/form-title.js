const titlePrefix = import.meta.env.VITE_TITLE_PREFIX;

const formTitle = (title) =>
	title ? `${title} | ${titlePrefix ?? ''}` : titlePrefix ?? '';

export default formTitle;
