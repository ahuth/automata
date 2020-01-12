import React from 'react';
import RuleSelector from './RuleSelector';
import { Dispatch } from '../reducer';
import { Type as Rule } from '../utils/rule';

type Props = {
  dispatch: Dispatch,
  rules: Rule[],
}

export default function Controls({ dispatch, rules }: Props) {
  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector dispatch={dispatch} rules={rules} />
      <button onClick={console.log} type="button">Draw</button>
    </section>
  );
}
