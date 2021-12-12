const objectPath = (obj, path, notFound = undefined) => {
	let value = obj;
	const parsedPath = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
	const keys = parsedPath.split('.');
	for (const key of keys) {
		if (key in value) value = value?.[key];
		else return notFound;
	}
	return value;
};

export default objectPath;
