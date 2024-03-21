import React from 'react';

export default function Casilla({ tablero, numCasilla, funcColocarCasilla }) {
  return (
    <div
      className="casilla fluorescent"
      onClick={() => funcColocarCasilla(numCasilla)}
    >
      {tablero[numCasilla - 1]}
    </div>
  );
}
