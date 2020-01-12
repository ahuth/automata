import React, { useCallback, useState } from 'react';
import Controls from './Controls';
import Grid from './Grid';
import * as Automata from '../utils/automata';

export default function App() {
  const [automata, setAutomata] = useState(Automata.create(31, 63));

  const toggleRule = useCallback(function (serializedInputs: string) {
    setAutomata(
      Automata.toggleRule(automata, serializedInputs),
    );
  }, [automata]);

  return (
    <React.Fragment>
      <Controls rules={automata.rules} toggleRule={toggleRule} />
      <aside>
        <p>Some of the more interesting rules are: 30, 54, 60, 62, 90, 94, 102, 110, 122, 126, 150, 158, 182, 188, 190, 222</p>
      </aside>
      <hr />
      <Grid rows={automata.rows} />
    </React.Fragment>
  );
}
