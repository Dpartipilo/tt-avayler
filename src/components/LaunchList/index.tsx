import { useContext } from 'react';
import { AppContext } from '../../Providers/AppProvider';
import { LaunchCard } from '../LaunchCard';
import styles from './LaunchList.module.scss';

export const LaunchList = () => {
  const { launches } = useContext(AppContext);
  return (
    <div className={styles.launchListContainer}>
      <div className={styles.titleContainer}>
        <h1>Launches</h1>
      </div>
      {launches.map(launch => {
        return <LaunchCard key={launch.flight_number} {...launch} />;
      })}
    </div>
  );
};
