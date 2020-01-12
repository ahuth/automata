import React, { useCallback, useState } from 'react';
import Grid from './Grid';
import RuleSelector from './RuleSelector';
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
      <RuleSelector rules={automata.rules} toggleRule={toggleRule} />
      <aside>
        <p>Some of the more interesting rules are: 30, 54, 60, 62, 90, 94, 102, 110, 122, 126, 150, 158, 182, 188, 190, 222.</p>
        <p>View the source code at <a href="https://github.com/ahuth/automata">https://github.com/ahuth/automata</a>.</p>
      </aside>
      <hr />
      <Grid rows={automata.rows} />
    </React.Fragment>
  );
}
