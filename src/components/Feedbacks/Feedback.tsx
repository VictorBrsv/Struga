import { Rating } from '../Rating/Rating';
import styles from './Feedback.module.scss';

type Props = {
  text: string;
  name: string;
  position: string;
  avatar: string;
};

const Feedback: React.FC<Props> = ({ text, name, position, avatar }) => {
  return (
    <div className={styles.feedback}>
      <Rating />
      <p>{text}</p>
      <div className={styles.author}>
        <img src={avatar} alt='avatar' className={styles.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>
            <span>{name}</span>
          </div>
          <div className={styles.position}>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
