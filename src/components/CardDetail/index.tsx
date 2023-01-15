import styles from './CardDetail.module.scss';
import { CardDetailProps } from '../../types';

export const CardDetail = (props: CardDetailProps) => {
  const { label, detail, type, element } = props;
  return (
    <div className={styles.cardDetail}>
      <span className={styles.label}>{label} </span>
      <div className={styles.detail}>{type === 'date' ? new Date(detail).toDateString() : detail || element}</div>
    </div>
  );
};
