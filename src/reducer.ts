import React from 'react';
import * as Automata from './utils/automata';

export type State = Automata.Type;

type IterateAction = {
  type: 'iterate',
};

type ToggleRuleBitAction = {
  type: 'toggle_rule_bit',
  payload: { serializedInputs: string },
};

export type Action =
  | IterateAction
  | ToggleRuleBitAction;

export type Dispatch = React.Dispatch<Action>;

export const initialState: State = Automata.create();

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'iterate':
      return Automata.iterate(state);
    case 'toggle_rule_bit':
      return Automata.toggleRuleBit(state, action.payload.serializedInputs);
    default:
      return state;
  }
}
