import React from 'react';
import RuleSelector from './RuleSelector';
import { Type as Rule } from '../utils/rule';

type Props = {
  onDrawClick: () => void,
  rules: Rule[],
}

export default function Controls({ onDrawClick, rules }: Props) {
  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector rules={rules} />
      <button onClick={onDrawClick} type="button">Draw</button>
    </section>
  );
}
