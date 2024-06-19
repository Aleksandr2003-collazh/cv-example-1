import styles from './burger.module.css';

export default function Burger() {
  return (
    <>
      {[...Array(3).keys()].map((el) => (
        <span key={el} className={styles.line} />
      ))}
    </>
  );
}
