import styles from './Cards.module.scss';

export const Items = [
  { id: 1, wordOne: 'МЕБЕЛЬ', wordTwo: 'И ИНТЕРЬЕР' },
  { id: 2, wordOne: 'ДОСКИ', wordTwo: 'СЕРВИРОВОЧНЫЕ' },
  { id: 3, wordOne: 'ДОСКИ', wordTwo: 'РАЗДЕЛОЧНЫЕ' },
  { id: 4, wordOne: 'МЕНАЖНИЦЫ', wordTwo: 'ОРЕШНИЦЫ' },
  { id: 5, wordOne: 'ПОДСТАВКИ', wordTwo: 'ДЛЯ ЧАСОВ' },
  { id: 6, wordOne: 'ТАРЕЛКИ', wordTwo: 'И БЛЮДА' },
  { id: 7, wordOne: 'ИНДИВИДУАЛЬНЫЕ', wordTwo: 'ИЗДЕЛИЯ ДЛЯ РЕСТОРАНОВ' },
];

export const styleMapping: { [key: number]: string } = {
  1: styles.catalogItem1,
  2: styles.catalogItem2,
  3: styles.catalogItem3,
  4: styles.catalogItem4,
  5: styles.catalogItem5,
  6: styles.catalogItem6,
  7: styles.catalogItem7,
};
