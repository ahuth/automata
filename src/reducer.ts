import * as Automata from './utils/automata';

export type State = Automata.Type;

export const initialState: State = Automata.create();

export default function reducer(state: State, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
