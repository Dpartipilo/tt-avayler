import { useContext } from 'react';
import { AppContext } from '../../Providers/AppProvider';
import { LaunchCard } from '../LaunchCard';
import styles from './LaunchList.module.scss';

export const LaunchList = () => {
  const { launches } = useContext(AppContext);
  return (
    <div className={styles.launchList}>
      {launches.map(launch => {
        return <LaunchCard key={launch.id} />;
      })}
    </div>
  );
};
