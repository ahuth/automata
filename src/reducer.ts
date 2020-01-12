import * as Rule from './utils/rule';

export type State = {
  rules: Rule.Type[],
};

export const initialState: State = {
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

export default function reducer(state: State, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
