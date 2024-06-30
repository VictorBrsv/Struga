import GetAllCatalog from '../../components/Buttons/GetAllCatalog';
import { Cards } from '../../components/Cards/Cards';
import { text } from './config';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className={styles.inner}>
        <span className={styles.title}>{text.title}</span>
        <br />
        <div className={styles.description_block}>
          <span className={styles.description_text}>
            {text.description_one} <br /> {text.description_two}
          </span>
        </div>
        <Cards />
        <GetAllCatalog />
      </div>
    </section>
  );
};
