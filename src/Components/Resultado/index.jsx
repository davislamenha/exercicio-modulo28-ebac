import styles from './Resultado.module.css';

export default function Resultado({ imc, situacaoIMC }) {
  return (
    <section className={styles.resultado}>
      <div className="container">
        <h3 className={styles.resultadoTitulo}>IMC:</h3>
        <span className={styles.resultadoValor}>{imc}</span>
        <span className={styles.resultadoSituacao}>{situacaoIMC}</span>
      </div>
    </section>
  );
}
