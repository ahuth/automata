import React from 'react';
import BitSelector from './BitSelector';
import * as Rule from '../automata/rule';

type Props = {
  rule: Rule.Type,
  onToggle: (position: Rule.Position) => void,
};

export default function RuleSelector({ rule, onToggle }: Props) {
  const ruleNumber = Rule.toNumber(rule);

  return (
    <fieldset style={styles.container}>
      <legend>Automata Rule</legend>
      <div style={styles.selectors}>
        {Rule.map(rule, (position, output) => {
          return <BitSelector key={position} position={position} output={output} onToggle={onToggle} />;
        })}
      </div>
      <span>Rule {ruleNumber}</span>
    </fieldset>
  );
}

const styles = {
  container: {
    width: 600,
  },
  selectors: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};
