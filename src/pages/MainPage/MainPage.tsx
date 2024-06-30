import { Content } from '../../components/Content/Content';
import { Header } from '../../components/Header/Header';
import { Statistics } from '../../components/Statistics/Statistics';
import styles from './MainPage.module.scss';
export const MainPage = () => {
  return (
    <div className={styles.main_page}>
      <Header />
      <Content />
      <Statistics />
    </div>
  );
};
