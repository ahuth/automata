import React, { useReducer } from 'react';
import Controls from './Controls';
import reducer, { initialState } from '../reducer';

export default function App() {
  const [state] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Controls rules={state.rules} onDrawClick={console.log} />
      <hr />
    </React.Fragment>
  );
}
