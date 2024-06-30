import { Clients } from '../../components/Clients/Clients';
import { Feedbacks } from '../../components/Feedbacks/Feedbacks';
import { text } from './config';
import photo_1 from './../../assets/images/about_us/Rectangle 17.png';
import photo_2 from './../../assets/images/about_us/Rectangle 18.png';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.section_about}>
      <div className={styles.inner}>
        <h1>{text.title}</h1>
        <div className={styles.description}>
          <div className={styles.text}>
            <p>{text.text_one}</p>
            <p>{text.text_two}</p>
          </div>
          <div className={styles.photos}>
            <img src={photo_1} alt='man' />
            <img src={photo_2} alt='pic' />
          </div>
        </div>
        <Clients />
        <Feedbacks />
      </div>
    </section>
  );
};
