import React from 'react';
import RuleSelector from './RuleSelector';

type Props = {
  onDrawClick: () => void,
  rule: number,
}

export default function Controls({ onDrawClick, rule }: Props) {
  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector rule={rule} />
      <button onClick={onDrawClick} type="button">Draw</button>
    </section>
  );
}
