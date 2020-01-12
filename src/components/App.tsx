import React, { useReducer } from 'react';
import Controls from './Controls';
import reducer, { initialState } from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Controls dispatch={dispatch} rules={state.rules} />
      <hr />
    </React.Fragment>
  );
}
