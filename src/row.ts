import * as Rule from './rule';

type Row = number[];

export type Type = Row;

export function create(size: number): Row {
  const row = new Array(size).fill(0);
  const middle = Math.floor(row.length / 2);
  row[middle] = 1;
  return row;
}

export function next(row: Row, rules: Rule.Type[]): Row {
  return eachNeighborhood(row).map(function (neighbors) {
    const rule = Rule.find(rules, neighbors);
    return rule.output;
  });
}

function eachNeighborhood(row: Row): number[][] {
  return row.map(function (value, index, array) {
    const prevIndex = index - 1;
    const nextIndex = index + 1;

    const prevValue = prevIndex < 0 ? 0 : array[prevIndex];
    const nextValue = nextIndex >= array.length ? 0 : array[nextIndex];

    return [prevValue, value, nextValue];
  });
}
