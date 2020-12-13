import * as Rule from './rule';
import * as World from './world';

type Automata = {
  height: number,
  width: number,
  rows: World.Type,
  rule: Rule.Type,
};

export type Type = Automata;

export function create(generations: number): Automata {
  const height = generations;
  const width = height * 2 + 1;

  // Rule 30.
  const rule = Rule.create(0, 0, 0, 1, 1, 1, 1, 0);

  return {
    height,
    width,
    rows: World.create(height, width, rule),
    rule,
  };
}

export function toggleRule(automata: Automata, position: Rule.Position): Automata {
  const nextRule = Rule.toggle(automata.rule, position);

  return {
    ...automata,
    rows: World.create(automata.height, automata.width, nextRule),
    rule: nextRule,
  };
}
