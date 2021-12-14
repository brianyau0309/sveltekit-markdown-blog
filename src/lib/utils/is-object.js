/**
 * Check if the variable is Object
 * @param {any} v variable
 * @returns {Boolean}
 */
const isObject = (v) => typeof v === 'object' && v !== null;

export default isObject;
