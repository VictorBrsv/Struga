import styles from './Card.module.scss';

export const Card = ({
  wordOne,
  wordTwo,
}: {
  wordOne: string;
  wordTwo: string;
}) => {
  return (
    <div className={styles.catalogText}>
      <span>{wordOne}</span>
      <br />
      <span className={styles.bold}>{wordTwo}</span>
    </div>
  );
};
