import React, { useCallback } from 'react';
import { Dispatch } from '../reducer';
import * as Rule from '../utils/rule';

type Props = {
  dispatch: Dispatch,
  rule: Rule.Type,
};

export default function BitSelector({ dispatch, rule }: Props) {
  const { inputs, output } = rule;

  const handleChange = useCallback(function () {
    dispatch({
      type: 'toggle_rule_bit',
      payload: {
        serializedInputs: Rule.machineReadableInputs(rule),
      },
    });
  }, [dispatch, rule]);

  return (
    <div style={styles.container}>
      <div style={styles.inputs}>
        {inputs.map(function (input, index) {
          return <div style={input === 0 ? styles.off : styles.on} key={index} />;
        })}
      </div>
      <input
        aria-label={Rule.humanReadableInputs(rule)}
        checked={output === 0 ? false : true}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  inputs: {
    display: 'flex',
  },
  on: {
    backgroundColor: 'black',
    border: '1px solid black',
    height: 8,
    width: 8,
  },
  off: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: 8,
    width: 8,
  },
};
