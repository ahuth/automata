import * as Rule from './rule';

export type Row = Rule.Bit[];
type Neighborhood = [Rule.Bit, Rule.Bit, Rule.Bit];

export function create(size: number): Row {
  const row = new Array(size).fill(0);
  const middle = Math.floor(row.length / 2);
  row[middle] = 1;
  return row;
}

export function next(row: Row, rule: Rule.Rule): Row {
  return eachNeighborhood(row).map(function (neighbors) {
    const position = Rule.getPositionFromList(neighbors);
    return rule[position];
  });
}

function eachNeighborhood(row: Row): Neighborhood[] {
  return row.map(function (value, index, array) {
    const prevIndex = index - 1;
    const nextIndex = index + 1;

    const prevValue = prevIndex < 0 ? 0 : array[prevIndex];
    const nextValue = nextIndex >= array.length ? 0 : array[nextIndex];

    return [prevValue, value, nextValue];
  });
}
