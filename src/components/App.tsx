import React from 'react';
import Controls from './Controls';

export default function App() {
  return (
    <React.Fragment>
      <Controls onDrawClick={() => console.log('clicked')} />
      <hr />
    </React.Fragment>
  );
}
