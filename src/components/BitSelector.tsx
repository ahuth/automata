import React, { ChangeEvent } from 'react';

type Bit = 0 | 1;

type Props = {
  inputs: Bit[],
  onChange: (event: ChangeEvent) => void,
  output: boolean,
};

export default function BitSelector({ inputs, onChange, output }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.inputs}>
        {inputs.map(function (input, index) {
          return <div style={input === 1 ? styles.on : styles.off} key={index} />;
        })}
      </div>
      <input aria-label={inputs.join()} checked={output} onChange={onChange} type="checkbox" />
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
