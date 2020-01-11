import React from 'react';
import uniqueId from '../utils/uniqueId';

type Byte = number;

type Props = {
  onDrawClick: () => void,
  rule: Byte,
}

export default class Controls extends React.Component<Props> {
  ruleId = uniqueId();

  render() {
    const { onDrawClick, rule } = this.props;

    return (
      <section aria-label="Cellular automata controls">
        <label htmlFor={this.ruleId}>Rule</label>
        <input id={this.ruleId} type="number" min="0" max="255" value={rule} />

        <button onClick={onDrawClick} type="button">Draw</button>
      </section>
    );
  }
}
