import React from 'react';
import Controls from './Controls';

export default function App() {
  return (
    <React.Fragment>
      <Controls rows={25} rule={30} onDrawClick={() => console.log('clicked')} />
      <hr />
    </React.Fragment>
  );
}
