import GoToCatalogButton from '../Buttons/GoToCatalogButton';
import EllipsePlay from '../EllipsePlay/EllipsePlay';
import styles from './Content.module.scss';

export const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.text}>
        <div className={styles.title_block}>
          <span className={styles.title_text}>
            Изделия из дерева на заказ <br /> с доставкой по всей России
          </span>
        </div>
        <div className={styles.subtitle_block}>
          <span className={styles.subtitle_text}>
            Стиль и уют деревянных аксессуаров <br /> в ваш дом, ресторан или
            кафе
          </span>
        </div>
        <GoToCatalogButton />
      </div>
      <EllipsePlay />
    </section>
  );
};
