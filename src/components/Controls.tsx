import React from 'react';
import RuleSelector from './RuleSelector';

type Props = {
  onDrawClick: () => void,
}

export default function Controls({ onDrawClick }: Props) {
  const rules = [
    { inputs: [1, 1, 1], output: 0 },
    { inputs: [1, 1, 0], output: 0 },
    { inputs: [1, 0, 1], output: 0 },
    { inputs: [1, 0, 0], output: 0 },
    { inputs: [0, 1, 1], output: 0 },
    { inputs: [0, 1, 0], output: 0 },
    { inputs: [0, 0, 1], output: 0 },
    { inputs: [0, 0, 0], output: 0 },
  ];

  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector rules={rules} />
      <button onClick={onDrawClick} type="button">Draw</button>
    </section>
  );
}
