import React, { useCallback } from 'react';
import RuleSelector from './RuleSelector';
import { Dispatch } from '../reducer';
import { Type as Rule } from '../utils/rule';

type Props = {
  dispatch: Dispatch,
  rules: Rule[],
}

export default function Controls({ dispatch, rules }: Props) {
  const handleClick = useCallback(function () {
    dispatch({ type: 'iterate' });
  }, [dispatch]);

  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector dispatch={dispatch} rules={rules} />
      <button onClick={handleClick} type="button">Iterate</button>
    </section>
  );
}
