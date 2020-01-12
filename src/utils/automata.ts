import * as Row from './row';
import * as Rule from './rule';

type Automata = {
  rows: Row.Type[],
  rules: Rule.Type[],
};

export type Type = Automata;

export function create(): Automata {
  return {
    rows: [Row.create()],
    rules: [
      Rule.create([1, 1, 1], 0),
      Rule.create([1, 1, 0], 1),
      Rule.create([1, 0, 1], 0),
      Rule.create([1, 0, 0], 1),
      Rule.create([0, 1, 1], 1),
      Rule.create([0, 1, 0], 0),
      Rule.create([0, 0, 1], 1),
      Rule.create([0, 0, 0], 0),
    ],
  };
}

export function iterate(automata: Automata): Automata {
  const lastRow = automata.rows[automata.rows.length - 1];
  const nextRow = Row.next(lastRow, automata.rules);

  return {
    ...automata,
    rows: automata.rows.concat([nextRow]),
  };
}

export function toggleRuleBit(automata: Automata, serializedOutputs: string): Automata {
  const nextRules = automata.rules.map(function (rule) {
    if (Rule.machineReadableInputs(rule) === serializedOutputs) {
      return Rule.toggle(rule);
    }
    return rule;
  });

  return {
    ...automata,
    rules: nextRules,
  };
}
