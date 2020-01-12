/**
 * Return an array with each consecutive run of `n` elements. Same as Ruby's `each_cons` method.
 * @see https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-each_cons
 */
export default function eachCons<T>(array: T[], n: number): T[][] {
  const cons = [];

  for (let i = 0; i < array.length - n + 1; i++) {
    cons.push(array.slice(i, i + n));
  }

  return [];
}
