import React from 'react';
import { Row } from '../automata/row';

type Props = {
  rows: Row[],
};

export default function Grid({ rows }: Props) {
  return (
    <div style={styles.container}>
      {rows.map(function (row, index) {
        return (
          <div key={index} style={styles.row}>
            {row.map(function (value, index) {
              return <div key={index} style={value === 0 ? styles.off : styles.on} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  row: {
    display: 'flex',
  },
  on: {
    backgroundColor: 'black',
    height: 8,
    width: 8,
  },
  off: {
    backgroundColor: 'white',
    height: 8,
    width: 8,
  },
};
