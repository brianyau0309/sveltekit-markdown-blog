const composeWith =
	(withFn) =>
	(...fns) =>
	(x) =>
		fns.reduceRight((v, f) => withFn(v, f), x);

export default composeWith;
