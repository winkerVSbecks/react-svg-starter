/**
 * Returns whether the provided value is a promise
 *
 * @param {object} value Potential promise
 * @return {Boolean}
 */
export default function isPromise(value) {
  return !!value &&
    typeof value.promise === 'object' &&
    typeof value.promise.then === 'function';
}
