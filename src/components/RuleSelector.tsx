import React from 'react';
import BitSelector from './BitSelector';

export default function RuleSelector() {
  return (
    <fieldset style={styles.container}>
      <legend>Automata Rule</legend>
      <div style={styles.selectors}>
        <BitSelector inputs={[1, 1, 1]} output={false} onChange={console.log} />
        <BitSelector inputs={[1, 1, 0]} output={false} onChange={console.log} />
        <BitSelector inputs={[1, 0, 1]} output={false} onChange={console.log} />
        <BitSelector inputs={[1, 0, 0]} output={false} onChange={console.log} />
        <BitSelector inputs={[0, 1, 1]} output={false} onChange={console.log} />
        <BitSelector inputs={[0, 1, 0]} output={false} onChange={console.log} />
        <BitSelector inputs={[0, 0, 1]} output={false} onChange={console.log} />
        <BitSelector inputs={[0, 0, 0]} output={false} onChange={console.log} />
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
