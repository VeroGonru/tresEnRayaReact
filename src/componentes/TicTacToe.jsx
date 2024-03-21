import React from 'react';
import Tablero from './Tablero';
import '../styles.css';

export default function TicTacToe() {
  return (
    <>
      <h1 className="fluorescent title">TicTacToe</h1>
      <Tablero />
    </>
  );
}
