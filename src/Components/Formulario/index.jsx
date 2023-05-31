import styles from './Formulario.module.css';

export default function Formulario({ submit }) {
  return (
    <div className="container">
      <form className={styles.form} onSubmit={submit}>
        <h2 className={styles.formTitulo}>Calculadora de IMC</h2>
        <label className={styles.formLabel} htmlFor="altura">
          Altura
        </label>
        <input
          className={styles.formInput}
          id="altura"
          type="number"
          step={0.01}
          required
        />
        <label className={styles.formLabel} htmlFor="peso">
          Peso
        </label>
        <input className={styles.formInput} id="peso" type="number" required />
        <button className={styles.formButton} type="submit">
          Calcular
        </button>
      </form>
    </div>
  );
}
