import * as Row from './row';
import * as Rule from './rule';

type World = Row.Type[];

export type Type = World;

export function create(height: number, width: number, rule: Rule.Type): World {
  const rows = [Row.create(width)];

  for (let i = 0; i < height; i++) {
    const lastRow = rows[rows.length - 1];
    const nextRow = Row.next(lastRow, rule);
    rows.push(nextRow);
  }

  return rows;
}
