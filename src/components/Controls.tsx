import React from 'react';
import uniqueId from '../utils/uniqueId';

export default class Controls extends React.Component {
  ruleId = uniqueId();
  rowsId = uniqueId();

  render() {
    return (
      <section aria-label="Cellular automata controls">
        <label htmlFor={this.ruleId}>Rule</label>
        <input id={this.ruleId} type="number" min="0" max="255" />

        <label htmlFor={this.rowsId}>Number of rows</label>
        <input id={this.ruleId} type="number" min="0" max="50" />

        <button type="button">Draw</button>
      </section>
    );
  }
}
