const titlePrefixEnv = import.meta.env.VITE_TITLE_PREFIX;
const titlePrefix = titlePrefixEnv ? String(titlePrefixEnv) : '';

/**
 * Form a page title with prefix string
 * @param {String} title
 * @returns {String}
 */
const formTitle = (title) => (title ? `${title} | ${titlePrefix}` : titlePrefix);

export default formTitle;
