import React from 'react';
import Controls from './Controls';
import * as Rule from '../utils/rule';

export default function App() {
  const rules = [
    Rule.create([1, 1, 1], 0),
    Rule.create([1, 1, 0], 1),
    Rule.create([1, 0, 1], 0),
    Rule.create([1, 0, 0], 1),
    Rule.create([0, 1, 1], 1),
    Rule.create([0, 1, 0], 0),
    Rule.create([0, 0, 1], 1),
    Rule.create([0, 0, 0], 0),
  ];

  return (
    <React.Fragment>
      <Controls rules={rules} onDrawClick={console.log} />
      <hr />
    </React.Fragment>
  );
}
