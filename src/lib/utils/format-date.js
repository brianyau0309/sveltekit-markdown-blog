import dayjs from '$dayjs';

/**
 * Convent date string to specific format using dayjs.
 * @param {String} from Format e.g. YYYY-MM-DD
 * @param {String} to Format e.g. YYYY-MM-DD
 * @param {String} date Date string
 * @returns {String} Formatted date string
 */
const formatDate = (from, to, date) => dayjs(date, from).format(to);

export default formatDate;
