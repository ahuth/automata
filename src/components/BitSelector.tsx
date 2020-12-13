import React from 'react';
import * as Rule from '../automata/rule';

type Props = {
  onToggle: (position: Rule.Position) => void,
  output: Rule.Bit;
  position: Rule.Position;
};

export default function BitSelector({ onToggle, output, position }: Props) {
  const inputsString = Rule.positionToString(position);
  const inputs = inputsString.split('').map(Number);

  return (
    <div style={styles.container}>
      <div style={styles.inputs}>
        {inputs.map(function (input, index) {
          return <div style={input === 0 ? styles.off : styles.on} key={index} />;
        })}
      </div>
      <input
        aria-label={inputsString}
        checked={output === 0 ? false : true}
        onChange={() => onToggle(position)}
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
