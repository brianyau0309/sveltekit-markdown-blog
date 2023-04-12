export const getHoverClassName = (hoverColor) => {
	let hoverClassName = [];
	switch (hoverColor) {
		case 'primary':
			hoverClassName = ['hover:bg-secondary-with-dark', 'hover:text-secondary-with-dark'];
			break;
		case 'opacity':
			hoverClassName = ['hover:opacity-80'];
			break;
		default:
			hoverClassName = [];
	}

	return hoverClassName;
};
