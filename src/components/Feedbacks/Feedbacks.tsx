import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import GiveFeedback from '../Buttons/GiveFeedback';
import Feedback from './Feedback';
import { feedbacks } from './mockFeedbacks';
import styles from './Feedbacks.module.scss';

export const Feedbacks = () => {
  return (
    <div className={styles.feedbacks_container}>
      <h1>Отзывы</h1>
      <div className={styles.feedbacks}>
        <ArrowLeft />
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
        <ArrowRight />
      </div>
      <GiveFeedback />
    </div>
  );
};
