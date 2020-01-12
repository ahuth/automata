import React from 'react';
import BitSelector from './BitSelector';

type Rule = {
  inputs: number[],
  output: number,
};

type Props = {
  rules: Rule[],
};

export default function RuleSelector({ rules }: Props) {
  return (
    <fieldset style={styles.container}>
      <legend>Automata Rule</legend>
      <div style={styles.selectors}>
        {rules.map(function (rule) {
          return <BitSelector key={rule.inputs.join()} rule={rule} onChange={console.log} />;
        })}
      </div>
    </fieldset>
  );
}

const styles = {
  container: {
    width: 500,
  },
  selectors: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};
