import * as Rule from './rule';
import * as World from './world';

type Automata = {
  height: number,
  width: number,
  rows: World.Type,
  rules: Rule.Type[],
};

export type Type = Automata;

export function create(generations: number): Automata {
  const height = generations;
  const width = height * 2 + 1;

  const rules = [
    Rule.create([1, 1, 1], 0),
    Rule.create([1, 1, 0], 0),
    Rule.create([1, 0, 1], 0),
    Rule.create([1, 0, 0], 1),
    Rule.create([0, 1, 1], 1),
    Rule.create([0, 1, 0], 1),
    Rule.create([0, 0, 1], 1),
    Rule.create([0, 0, 0], 0),
  ];

  return {
    height,
    width,
    rows: World.create(height, width, rules),
    rules,
  };
}

export function toggleRule(automata: Automata, serializedOutputs: string): Automata {
  const nextRules = automata.rules.map(function (rule) {
    if (Rule.machineReadableInputs(rule) === serializedOutputs) {
      return Rule.toggle(rule);
    }
    return rule;
  });

  return {
    ...automata,
    rows: World.create(automata.height, automata.width, nextRules),
    rules: nextRules,
  };
}
