import React from 'react';
import uniqueId from '../utils/uniqueId';

type Props = {
  rule: number,
}

export default class Controls extends React.Component<Props> {
  ruleId = uniqueId();

  render() {
    const { rule } = this.props;

    return (
      <fieldset>
        <legend>Automata Rule</legend>
        <label htmlFor={this.ruleId}>Rule</label>
        <input id={this.ruleId} type="number" min="0" max="255" value={rule} />
      </fieldset>
    );
  }
}
