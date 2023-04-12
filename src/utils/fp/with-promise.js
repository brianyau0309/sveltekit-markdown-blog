import { isPromise } from '$utils/fp';

const andThen = (f, v) => {
	if (isPromise(v)) return v.then(f);
	throw new TypeError('Not a promise.');
};
const withPromise = (v, f) => (isPromise(v) ? andThen(f, v) : f(v));

export default withPromise;
