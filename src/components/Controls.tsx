import React from 'react';
import RuleSelector from './RuleSelector';

type Rule = {
  inputs: number[],
  output: number,
};

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
