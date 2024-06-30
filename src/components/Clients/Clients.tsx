import img_1 from './../../assets/images/clients/Group.png';
import img_2 from './../../assets/images/clients/Group (1).png';
import img_3 from './../../assets/images/clients/Group (2).png';
import img_4 from './../../assets/images/clients/Group (3).png';
import img_5 from './../../assets/images/clients/Group (4).png';
import styles from './Clients.module.scss';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const ClientsArr = [img_1, img_2, img_3, img_4, img_5];

export const Clients = () => {
  return (
    <div className={styles.clients_container}>
      <h1>Наши клиенты</h1>
      <div className={styles.inner}>
        <ArrowLeft />
        <div className={styles.clients}>
          <div className={styles.imgs}>
            {ClientsArr.map((img) => (
              <img key={img} src={img} />
            ))}
          </div>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};
