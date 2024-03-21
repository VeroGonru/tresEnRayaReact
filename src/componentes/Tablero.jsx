import React from 'react';
import Casilla from './Casilla';
import checkWinner from '../utils/checkWinner';

export default function Tablero() {
  const [tablero, setTablero] = React.useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const [turno, setTurno] = React.useState('X');

  const [ganador, setGanador] = React.useState(null);

  function ColocarCasilla(nCasilla) {
    //primero comprobamos que las casillas esten vacia
    if (tablero[nCasilla - 1] !== '') return;
    //Hacemos una copia de tablero
    const nuevoTablero = tablero;

    //actualizamos la casilla
    nuevoTablero[nCasilla - 1] = turno;

    //actualizamos el estado
    setTablero(nuevoTablero);

    //comprobar ganador
    const hayGanador = checkWinner(tablero);
    if (hayGanador) {
      setGanador(hayGanador);
    }

    //cambiamos el turno
    if (turno === 'X') {
      setTurno('O');
    } else {
      setTurno('X');
    }
  }
  return (
    <>
      <div id="tablero">
        <Casilla
          tablero={tablero}
          numCasilla={1}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={2}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={3}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={4}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={5}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={6}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={7}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={8}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
        <Casilla
          tablero={tablero}
          numCasilla={9}
          funcColocarCasilla={ColocarCasilla}
        ></Casilla>
      </div>

      {ganador && <h1 className="fluorescent">El ganador es {ganador}</h1>}
    </>
  );
}
