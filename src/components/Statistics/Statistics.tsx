import styles from './Statistics.module.scss';

const items = [
  { number: '14', text_one: 'лет', text_two: 'опыта' },
  { number: '12 000', text_one: 'изделий', text_two: 'изготовлено' },
  { number: '700+', text_one: 'довольных', text_two: 'клиентов' },
  { number: '4.95', text_one: 'средний', text_two: 'рейтинг заказов' },
];

const StatisticsItem = ({
  number,
  text_one,
  text_two,
}: {
  number: string;
  text_one: string;
  text_two: string;
}) => {
  return (
    <div className={styles.item}>
      <span className={styles.number}>{number}</span>
      <span className={styles.text}>{text_one}</span>
      <span className={styles.text}>{text_two}</span>
    </div>
  );
};

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      {items.map((item) => (
        <StatisticsItem key={item.number} {...item} />
      ))}
    </section>
  );
};
