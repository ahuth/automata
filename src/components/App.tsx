import React from 'react';
import Controls from './Controls';

export default function App() {
  const rules = [
    { inputs: [1, 1, 1], output: 0 },
    { inputs: [1, 1, 0], output: 1 },
    { inputs: [1, 0, 1], output: 0 },
    { inputs: [1, 0, 0], output: 1 },
    { inputs: [0, 1, 1], output: 1 },
    { inputs: [0, 1, 0], output: 0 },
    { inputs: [0, 0, 1], output: 1 },
    { inputs: [0, 0, 0], output: 0 },
  ];

  return (
    <React.Fragment>
      <Controls rules={rules} onDrawClick={() => console.log('clicked')} />
      <hr />
    </React.Fragment>
  );
}
