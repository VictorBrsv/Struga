import { Card } from './Card';
import { styleMapping, Items } from './config';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.row_one}>
        {Items.slice(0, 1).map((item) => (
          <div key={item.id} className={styles.block_one}>
            <div className={styleMapping[item.id]}>
              <Card wordOne={item.wordOne} wordTwo={item.wordTwo} />
            </div>
          </div>
        ))}
        <div className={styles.block_two}>
          {Items.slice(1, 5).map((item) => (
            <div key={item.id} className={styleMapping[item.id]}>
              <Card wordOne={item.wordOne} wordTwo={item.wordTwo} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.row_two}>
        {Items.slice(5, 7).map((item) => (
          <div key={item.id} className={styleMapping[item.id]}>
            <Card wordOne={item.wordOne} wordTwo={item.wordTwo} />
          </div>
        ))}
      </div>
    </div>
  );
};
