import leftArrow from './../../assets/images/clients/Vector 2.png';
import rightArrow from './../../assets/images/clients/Vector 2 (1).png';
import styles from './Arrows.module.scss';

export const ArrowLeft = () => {
  return (
    <div className={styles.ellipse_left}>
      <img src={leftArrow} className={styles.arrow} />
    </div>
  );
};

export const ArrowRight = () => {
  return (
    <div className={styles.ellipse_right}>
      <img src={rightArrow} className={styles.arrow} />
    </div>
  );
};
