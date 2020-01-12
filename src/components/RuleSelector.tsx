import React from 'react';
import BitSelector from './BitSelector';
import * as Rule from '../utils/rule';

type Props = {
  rules: Rule.Type[],
  toggleRule: (inputs: string) => void,
};

export default function RuleSelector({ rules, toggleRule }: Props) {
  const outputBits = rules.map(rule => rule.output);
  const ruleNumber = parseInt(outputBits.join(''), 2);

  return (
    <fieldset style={styles.container}>
      <legend>Automata Rule</legend>
      <div style={styles.selectors}>
        {rules.map(function (rule) {
          return <BitSelector key={Rule.machineReadableInputs(rule)} rule={rule} toggle={toggleRule} />;
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
