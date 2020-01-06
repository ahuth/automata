import React from 'react';

export default function Controls() {
  return (
    <section aria-label="Cellular automata controls">
      <label>
        Rule
        <input />
      </label>
      <button type="button">Draw</button>
    </section>
  );
}
