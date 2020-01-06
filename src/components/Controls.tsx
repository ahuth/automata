import React from 'react';
import uniqueId from '../utils/uniqueId';

export default class Controls extends React.Component {
  id = uniqueId();

  render() {
    return (
      <section aria-label="Cellular automata controls">
        <label htmlFor={this.id}>Rule</label>
        <input id={this.id} />
        <button type="button">Draw</button>
      </section>
    );
  }
}
