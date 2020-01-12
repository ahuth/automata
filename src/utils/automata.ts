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
