import React, { useReducer } from 'react';
import Controls from './Controls';
import Grid from './Grid';
import reducer, { initialState } from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Controls dispatch={dispatch} rules={state.rules} />
      <hr />
      <Grid rows={state.rows} />
    </React.Fragment>
  );
}
