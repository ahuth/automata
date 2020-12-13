import * as Row from './row';
import * as Rule from './rule';

export type World = Row.Row[];

export function create(height: number, width: number, rule: Rule.Rule): World {
  const rows = [Row.create(width)];

  for (let i = 0; i < height; i++) {
    const lastRow = rows[rows.length - 1];
    const nextRow = Row.next(lastRow, rule);
    rows.push(nextRow);
  }

  return rows;
}
