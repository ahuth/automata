import React from 'react';
import { Type as Row } from '../utils/row';

type Props = {
  columns: number,
  rows: Row[],
};

export default function Grid({ rows, columns }: Props) {
  return (
    <div style={styles.container}>
      {rows.map(function (row) {
        return (
          <div style={styles.row}>
            {row.map(function (value) {
              return <div style={value === 0 ? styles.off : styles.on} />;
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
    border: '1px solid black',
    height: 8,
    width: 8,
  },
  off: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: 8,
    width: 8,
  },
};