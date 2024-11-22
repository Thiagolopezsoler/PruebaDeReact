/*La idea seria primero que nada obtener el nombre del jugador y que cuando vos apretar jugar cambie la pantalla 
al modo de juego donde tengo que tener el 5x5(debe haber un arreglo que tenga numeros aleatorios voy a hacer que
los cuadrados sean colores pero me gustaria que sean imagenes, tambien voy a usar la function de random) mee 
gustaria que tenga  a la derecha el top 10 de jugadores que encotraron el tesoro en menos jugadas */

import React, { useState } from 'react';

function App() {
  //el arreglo para guardar las x u o
  const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null]);
  //los nombres de los jugadores
  const [jugador1, setJugador1] = useState('Jugador 1');
  const [ubicacionTesoro, setUbicacionTesoro] = useState([null, null, null, null, null, null, null, null, null,
    "tesoro", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
  //creo dos modos de juego para poner el nombre y otro para jugar
  const [modo, setModo] = useState('preparacion');
  //es para sumar los puntos teniendo un contador
  const [puntosj1, setPuntosj1] = useState(0);

  const [count, setCount] = useState(0);



  //cambia el modo de poner el nombre a el para jugar
  const handleClick = () => {
    console.log('Jugador 1:', jugador1);
    setModo('juego');
  };
  //es para poner las x u o creando un nuevo arreglo, modificando el anterior y activa la funcion para ver si alguien gano
  const botonPresionado = (index) => {
    const nuevoArreglo = [...arreglo];
    if (ubicacionTesoro[index] === null) {
      console.log("No está el tesoro");
      alert("Hay no está el tesoro")
    } else {
      console.log("Sí, está el tesoro")
      alert("¡¡¡Felicitaciones ahí está el tesoro!!!, ganaste")
      setPuntosj1(puntosj1 + 1)
      resetGame();
    }
    if (nuevoArreglo[index] === null) {
      nuevoArreglo[index] = 'X';
      setArreglo(nuevoArreglo); 
    }
    setCount(count + 1)
  };
/*Al resetear el juego busco un numero aleatorio aunque tuve problemas con eso y la idea seria 
despues comparar si el index es igual a ese numero*/

  const resetGame = () => {
    /*let tesoro = Math.floor(math.random() * 24);
    console.log(tesoro /*+ tesoroRedondeado);*/
    setArreglo([null, null, null, null, null, null, null, null, null, null,null,
      null,null,null,null,null,null, null, null, null, null, null, null, null, "tesoro"
    ]);
    setUbicacionTesoro([null, null, null, null, null, null, null, null, null,
      null , null, null, null, null, null, null, null, null, null, null,"tesoro", null, null, null, null])
      console.log("Llega a resetear")
  };
//cambio del modo de juego para poner los nombres desde el que seria el juego en sí
  const reiniciar = () => {
    setModo('preparacion')
  }
  // Por si te interesa reiniciar el contador
  const reiniciarcontador = () => {
    setPuntosj1(0);
  }

  return (
    <>
      {modo === 'preparacion' ? (
        <>
          <img
            src="https://wallpapers.com/images/hd/pc-gaming-logos-n60oi65j885nl2a8.jpg"
            alt="fondo"
            className="picture"
          />
          <div className="inicio">
            <h1>Bienvenido</h1>
            <h1>Jugador 1</h1>
            <input
              className="input"
              type="text"
              placeholder='jugador 1'
              onChange={(e) => setJugador1(e.target.value)}
            />
            <button className="btn" onClick={handleClick}>
              ¡¡¡Empezar!!!
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src="https://image.slidesdocs.com/responsive-images/background/3d-gamepad-illustration-for-gaming-enthusiasts-powerpoint-background_4be585a78a__960_540.jpg"
            alt="fondo"
            className="picture"
          />
          <div className="juego">
            <h1>¡El juego ha comenzado!</h1>
            <button className='btn' onClick={reiniciar}>volver</button>
            <button className='btn' onClick={reiniciarcontador}>reiniciar contador</button>
            <p>{jugador1} tiene: {puntosj1} puntos</p>
            <div className="botones">
              {arreglo.map((valor, index) => (
                <div
                  key={index}
                  className="boton"
                  onClick={() => botonPresionado(index)}
                >
                  {valor}
                </div>
              ))}
            </div>
            <p>Te toca jugar, vas {count} intentos</p>
          </div>
        </>
      )}
    </>
  );
}

export default App;