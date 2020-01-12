import eachCons from './eachCons';
import * as Rule from './rule';

type Bit = 0 | 1;
type Row = Bit[];

export function next(row: Row, rule: Rule.Type): Row {
  return mapEachNeighborhood(row, function (neighbors) {
    return Rule.apply(rule, neighbors);
  });
}

function mapEachNeighborhood(row: Row, callback: (neighbors: Bit[]) => Bit): Row {
  return eachCons(row, 3).map(function (neighbors) {
    return callback(neighbors);
  });
}
