import * as Rule from './rule';

type Automata = {
  rules: Rule.Type[],
};

export type Type = Automata;

export function create(): Automata {
  return {
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
