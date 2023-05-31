import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.headerTitulo}>IMC</h1>
      </div>
    </header>
  );
}
