import eachCons from './eachCons';
import * as Rule from './rule';

type Row = number[];

export type Type = Row;

export function create(): Row {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export function next(row: Row, rules: Rule.Type[]): Row {
  return eachCons(row, 3).map(function (neighbors) {
    const rule = Rule.find(rules, neighbors);
    return rule.output;
  });
}
