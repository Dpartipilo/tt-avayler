import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src='https://www.spacex.com/static/images/share.jpg' alt='SpaceX banner' />
    </div>
  );
};
