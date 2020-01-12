import eachCons from './eachCons';
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
  return eachCons(row, 3).map(function (neighbors) {
    const rule = Rule.find(rules, neighbors);
    return rule.output;
  });
}
