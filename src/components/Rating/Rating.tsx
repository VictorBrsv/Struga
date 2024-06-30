import star from './../../assets/images/feedbacks/Star 3.png';
import styles from './Rating.module.scss';

export const Rating = () => {
  return (
    <div className={styles.rating}>
      <img src={star} />
      <img src={star} />
      <img src={star} />
      <img src={star} />
      <img src={star} />
    </div>
  );
};
