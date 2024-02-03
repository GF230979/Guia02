"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero, setNumero] = useState(0);
  const [limite, setLimite] = useState(0);
  const [resultado, setResultado] = useState([]);
  const [operacion, setOperacion] = useState(null);
  const [resultadoOperacion, setResultadoOperacion] = useState(null);

  const realizarOperacion = (tipoOperacion) => {
    switch (tipoOperacion) {
      case "suma":
        setResultadoOperacion(numero + limite);
        break;
      case "resta":
        setResultadoOperacion(numero - limite);
        break;
      case "multiplicacion":
        setResultadoOperacion(numero * limite);
        break;
      case "division":
        if (limite !== 0) {
          setResultadoOperacion(numero / limite);
        } else {
          setResultadoOperacion("Error: División por cero");
        }
        break;
      case "potenciacion":
        setResultadoOperacion(Math.pow(numero, limite));
        break;
      case "raizCuadrada":
        setResultadoOperacion(Math.sqrt(numero));
        break;
      default:
        break;
    }
  };

  const borrarNumeros = () => {
    setNumero(0);
    setLimite(10);
    setResultado([]);
    setOperacion(null);
    setResultadoOperacion(null);
  };

  useEffect(() => {
    if (operacion) {
      realizarOperacion(operacion);
    }
  }, [operacion]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= limite; i++) {
      nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    setResultado(nuevaTabla);
  };

  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.title2}>Tabla de Multiplicar</h2>
        <label className={styles.text}>
          Ingrese un número:
          <input
            className={styles.input}
            type="number"
            value={numero}
            onChange={(e) => setNumero(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label className={styles.text}>
          Límite de números a mostrar:
          <input
            className={styles.input}
            type="number"
            value={limite}
            onChange={(e) => setLimite(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button className={styles.button} onClick={generarTabla}>
          Generar Tabla
        </button>
        <hr />
        <h3>Resultado</h3>
        <ul className={styles.ul}>
          {resultado.map((item, index) => (
            <li className={styles.li} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <hr />
        <h3>Operaciones</h3>
        <button
          className={styles.button}
          onClick={() => setOperacion("suma")}
        >
          Sumar con {limite}
        </button>
        <button
          className={styles.button}
          onClick={() => setOperacion("resta")}
        >
          Restar con {limite}
        </button>
        <button
          className={styles.button}
          onClick={() => setOperacion("multiplicacion")}
        >
          Multiplicar por {limite}
        </button>
        <button
          className={styles.button}
          onClick={() => setOperacion("division")}
        >
          Dividir por {limite}
        </button>
        <button
          className={styles.button}
          onClick={() => setOperacion("potenciacion")}
        >
          Potenciación a la {limite}
        </button>
        <button
          className={styles.button}
          onClick={() => setOperacion("raizCuadrada")}
        >
          Raíz cuadrada de {numero}
        </button>
        <br />
        {resultadoOperacion !== null && (
          <div>
            <h3>Resultado de la operación</h3>
            <p>{resultadoOperacion}</p>
          </div>
        )}
        <button className={styles.button} onClick={borrarNumeros}>
          Borrar Números y Reiniciar
        </button>
      </div>
    </main>
  );
}
