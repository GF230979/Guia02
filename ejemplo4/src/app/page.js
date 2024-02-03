"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero, setNumero] = useState(1);
  const [limite, setLimite] = useState(10);
  const [resultado, setResultado] = useState([]);
  const [operando1, setOperando1] = useState(0);
  const [operando2, setOperando2] = useState(0);
  const [operacion, setOperacion] = useState("");
  const [error, setError] = useState("");

  const operar = () => {
    try {
      switch (operacion) {
        case "suma":
            setResultado([`${operando1} + ${operando2} = ${operando1 + operando2}`]);
          break;
        case "resta":
          setResultado([`${operando1} - ${operando2} = ${operando1 - operando2}`]);
          break;
        case "multiplicacion":
          setResultado([`${operando1} x ${operando2} = ${operando1 * operando2}`]);
          break;
        case "division":
          if (operando2 === 0) {
            throw new Error("No se puede dividir por cero");
          }
          setResultado([`${operando1} / ${operando2} = ${operando1 / operando2}`]);
          break;
        case "potenciacion":
          setResultado([`${operando1} ^ ${operando2} = ${Math.pow(operando1, operando2)}`]);
          break;
        case "raizCuadrada":
          if (!operando1 && operando1 !== 0) {
            throw new Error("Ingrese un número para la raíz cuadrada");
          }
          setResultado([`√${operando1} = ${Math.sqrt(operando1)}`]);
          break;
        case "generarTabla":
          const nuevaTabla = [];
          for (let i = 1; i <= operando2; i++) {
            nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
          }
          setResultado(nuevaTabla);
          break;
        default:
          throw new Error("Operación no válida");
      }
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const reiniciarCalculadora = () => {
    setOperando1(0);
    setOperando2(0);
    setOperacion("");
    setResultado([]);
    setError("");
  };

  return (
    <main className={styles.main}>
      <div className={styles.caja}>
        <h2 className={styles.title2}>Calculadora</h2>
        {operacion === "raizCuadrada" ? (
          <>
            <label className={styles.text}>
              Número para la raíz cuadrada:
              <input
                className={styles.input}
                type="number"
                step="any"
                value={operando1}
                onChange={(e) => setOperando1(parseFloat(e.target.value))}
              />
            </label>
            <button className={styles.button} onClick={operar}>
              Calcular Raíz Cuadrada
            </button>
          </>
        ) : operacion === "generarTabla" ? (
          <>
            <label className={styles.text}>
              Número para la tabla:
              <input
                className={styles.input}
                type="number"
                step="any"
                value={numero}
                onChange={(e) => setNumero(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <label className={styles.text}>
              Límite de números a mostrar en la tabla:
              <input
                className={styles.input}
                type="number"
                step="any"
                value={operando2}
                onChange={(e) => setOperando2(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <button className={styles.button} onClick={operar}>
              Generar Tabla
            </button>
          </>
        ) : (
          <>
            <label className={styles.text}>
              Operación:
              <select
                className={styles.input}
                value={operacion}
                onChange={(e) => setOperacion(e.target.value)}
              >
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
                <option value="potenciacion">Potenciación</option>
                <option value="raizCuadrada">Raíz Cuadrada</option>
                <option value="generarTabla">Generar Tabla</option>
              </select>
            </label>
            <br />
            <label className={styles.text}>
              Operando 1:
              <input
                className={styles.input}
                type="number"
                step="any"
                value={operando1}
                onChange={(e) => setOperando1(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <label className={styles.text}>
              Operando 2:
              <input
                className={styles.input}
                type="number"
                step="any"
                value={operando2}
                onChange={(e) => setOperando2(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <button className={styles.button} onClick={operar}>
              Calcular
            </button>
          </>
        )}
        <button className={styles.button} onClick={reiniciarCalculadora}>
          Reiniciar
        </button>
        <hr />
        <h3>Resultado</h3>
        {error && <p className={styles.error}>{error}</p>}
        <ul className={styles.ul}>
          {resultado.map((item, index) => (
            <li className={styles.li} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
