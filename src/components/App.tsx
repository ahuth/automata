import React, { useState } from 'react';
import Grid from './Grid';
import RuleSelector from './RuleSelector';
import * as Automata from '../automata/automata';

const initialAutomata = Automata.create(63);

export default function App() {
  const [automata, setAutomata] = useState(initialAutomata);

  return (
    <React.Fragment>
      <RuleSelector
        rule={automata.rule}
        onToggle={(position) => {
          setAutomata(Automata.toggleRule(automata, position));
        }}
      />
      <aside>
        <p>Some of the more interesting rules are: 30, 54, 60, 62, 90, 94, 102, 110, 122, 126, 150, 158, 182, 188, 190, 222.</p>
        <p>View the source code at <a href="https://github.com/ahuth/automata">https://github.com/ahuth/automata</a>.</p>
      </aside>
      <hr />
      <Grid rows={automata.rows} />
    </React.Fragment>
  );
}
