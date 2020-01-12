import React from 'react';
import RuleSelector from './RuleSelector';

type Props = {
  onDrawClick: () => void,
}

export default function Controls({ onDrawClick }: Props) {
  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector />
      <button onClick={onDrawClick} type="button">Draw</button>
    </section>
  );
}
