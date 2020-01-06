import React from 'react';
import uniqueId from '../utils/uniqueId';

type Byte = number;

type Props = {
  onDrawClick: () => void,
  rows: number,
  rule: Byte,
}

export default class Controls extends React.Component<Props> {
  ruleId = uniqueId();
  rowsId = uniqueId();

  render() {
    const { onDrawClick, rows, rule } = this.props;

    return (
      <section aria-label="Cellular automata controls">
        <label htmlFor={this.ruleId}>Rule</label>
        <input id={this.ruleId} type="number" min="0" max="255" value={rule} />

        <label htmlFor={this.rowsId}>Number of rows</label>
        <input id={this.rowsId} type="number" min="0" max="50" value={rows} />

        <button onClick={onDrawClick} type="button">Draw</button>
      </section>
    );
  }
}
