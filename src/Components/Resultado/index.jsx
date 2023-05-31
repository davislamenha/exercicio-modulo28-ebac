import styles from './Resultado.module.css';

export default function Resultado() {
  return (
    <section className={styles.resultado}>
      <div className="container">
        <h3 className={styles.resultadoTitulo}>IMC:</h3>
        <span className={styles.resultadoValor}></span>
        <span className={styles.resultadoSituacao}></span>
      </div>
    </section>
  );
}
