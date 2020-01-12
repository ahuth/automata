import React, { useReducer } from 'react';
import Controls from './Controls';
import Grid from './Grid';
import reducer, { initialState } from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Controls dispatch={dispatch} rules={state.rules} />
      <aside>
        <p>Some of the more interesting rules are: 30, 54, 60, 62, 90, 94, 102, 110, 122, 126, 150, 158, 182, 188, 190, 222</p>
      </aside>
      <hr />
      <Grid rows={state.rows} />
    </React.Fragment>
  );
}
