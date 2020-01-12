import React from 'react';
import BitSelector from './BitSelector';
import { Dispatch } from '../reducer';
import * as Rule from '../utils/rule';

type Props = {
  dispatch: Dispatch,
  rules: Rule.Type[],
};

export default function RuleSelector({ dispatch, rules }: Props) {
  const outputBits = rules.map(rule => rule.output);
  const ruleNumber = parseInt(outputBits.join(''), 2);

  return (
    <fieldset style={styles.container}>
      <legend>Automata Rule</legend>
      <div style={styles.selectors}>
        {rules.map(function (rule) {
          return <BitSelector dispatch={dispatch} key={Rule.machineReadableInputs(rule)} rule={rule} />;
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
