import * as TYPES from '../../types';
import { CardDetail } from '../CardDetail';
import styles from './LaunchCard.module.scss';

export const LaunchCard = (props: TYPES.LaunchesProps) => {
  const { name, date_utc, links, payloads, cores, success, failures } = props;
  const { id, type } = payloads[0];
  // https://images2.imgbox.com domain was not working I discovered that removing the number 2 makes it work so using that one instead
  const workingImageLink = links.patch.small.replace('images2', 'images');
  return (
    <div className={styles.launchCardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.imageContainer}>
          <img src={workingImageLink} alt='launch' />
        </div>
        <div className={styles.nameContainer}>
          <h2>{name}</h2>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <CardDetail label='Name:' detail={name} />
        <CardDetail label='Launched on:' detail={date_utc} type='date' />
        <CardDetail label='Core serial:' detail={cores[0].core || 'N/A'} />
        <CardDetail label='Payload ID:' detail={id || 'N/A'} />
        <CardDetail label='Payload type:' detail={type || 'N/A'} />
        <div className={styles.launchSuccess}>
          <CardDetail
            label='Launch results:'
            element={
              success ? (
                <div>
                  <img src='/checkmark-icon.svg' alt='success icon' width={30} height={30} />
                  <span>Success</span>
                </div>
              ) : (
                <div>
                  <img src='/failure-icon.svg' alt='failure icon' width={30} height={30} />
                  <span>Failure</span>
                </div>
              )
            }
          />
          {!success && <CardDetail label='Failure reason:' detail={failures?.[0]?.reason || 'N/A'} />}
        </div>
      </div>
    </div>
  );
};
