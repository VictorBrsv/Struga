import playIcon from './../../assets/images/Group 3.png';
import styles from './EllipsePlay.module.scss';
const EllipsePlay = () => {
  return (
    <div className={styles.ellipse}>
      <svg viewBox='0 0 200 200' className={styles.text_border}>
        <defs>
          <path
            id='textPath'
            d='M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0'
          />
        </defs>
        <text fill='#f5e2c3' fontSize='16'>
          <textPath href='#textPath' startOffset='0%'>
            <animate
              attributeName='startOffset'
              from='0%'
              to='100%'
              dur='10s'
              repeatCount='indefinite'
            />
            Краткое видео о нашей мастерской
          </textPath>
        </text>
      </svg>
      <img src={playIcon} alt='Иконка' className={styles.icon} />
    </div>
  );
};

export default EllipsePlay;
