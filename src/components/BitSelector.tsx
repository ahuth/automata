import React, { ChangeEvent } from 'react';

type Rule = {
  inputs: number[],
  output: number,
};

type Props = {
  onChange: (event: ChangeEvent) => void,
  rule: Rule,
};

export default function BitSelector({ onChange, rule }: Props) {
  const { inputs, output } = rule;

  return (
    <div style={styles.container}>
      <div style={styles.inputs}>
        {inputs.map(function (input, index) {
          return <div style={input === 0 ? styles.off : styles.on} key={index} />;
        })}
      </div>
      <input aria-label={inputs.join()} checked={output === 0 ? false : true} onChange={onChange} type="checkbox" />
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
