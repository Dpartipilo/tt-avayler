import styles from './Error.module.scss';
import { AppContext } from 'src/Providers/AppProvider';
import { useContext } from 'react';

export const Error = () => {
  const { serverError } = useContext(AppContext);
  return (
    <div className={styles.errorContainer}>
      <h2>Error</h2>

      <div className={styles.errorMessageContainer}>
        <span className={styles.errorMessage}>{serverError?.message}</span>
        <span className={styles.errorDetails}>{serverError?.response?.data}</span>
      </div>
    </div>
  );
};
