export type Bit = 0 | 1;
export type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];
export type Position = 0b111 | 0b110 | 0b101 | 0b100 | 0b011 | 0b010 | 0b001 | 0b000;

type Rule = {
  [position in Position]: Bit;
}

export type Type = Rule;

export function create(...bits: Byte): Rule {
  return {
    0b111: bits[0],
    0b110: bits[1],
    0b101: bits[2],
    0b100: bits[3],
    0b011: bits[4],
    0b010: bits[5],
    0b001: bits[6],
    0b000: bits[7],
  };
}

export function getBit(rule: Rule, position: Position): Bit {
  return rule[position];
}

export function getBits(rule: Rule): Byte {
  // TypeScript can't tell that the array returned by `map` has the 8 values required to
  // match `Byte`. But we know that it does, which is why there's an `as` type cast.
  return map(rule, function (_position, output) {
    return output;
  }) as Byte;
}

export function map<T>(rule: Rule, callback: (position: Position, output: Bit) => T): T[] {
  return [
    callback(0b111, rule[0b111]),
    callback(0b110, rule[0b110]),
    callback(0b101, rule[0b101]),
    callback(0b100, rule[0b100]),
    callback(0b011, rule[0b011]),
    callback(0b010, rule[0b010]),
    callback(0b001, rule[0b001]),
    callback(0b000, rule[0b000]),
  ];
}

export function toggle(rule: Rule, position: Position): Rule {
  rule[position] = rule[position] === 0 ? 1 : 0;
  return rule;
}

export function toNumber(rule: Rule): number {
  return parseInt(getBits(rule).join(''), 2);
}

export function positionToString(position: Position): string {
  return position.toString(2).padStart(3, '0');
}

export function getPositionFromList(list: [Bit, Bit, Bit]): Position {
  // TypeScript can't tell that the parsed number is one of the positions. But we know that it is,
  // which is why there's an `as` type case.
  return parseInt(list.join(''), 2) as Position;
}
