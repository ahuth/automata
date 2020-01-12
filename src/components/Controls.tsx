import React from 'react';
import RuleSelector from './RuleSelector';
import { Type as Rule } from '../utils/rule';

type Props = {
  rules: Rule[],
  toggleRule: (inputs: string) => void,
};

export default function Controls({ rules, toggleRule }: Props) {
  return (
    <section aria-label="Cellular automata controls">
      <RuleSelector toggleRule={toggleRule} rules={rules} />
    </section>
  );
}
