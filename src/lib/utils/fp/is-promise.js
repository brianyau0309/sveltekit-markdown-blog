const isPromise = (p) => typeof p?.then === 'function';

export default isPromise;
