import { createContext, ReactElement, useCallback, useMemo, useState } from 'react';
import * as TYPES from '../types';
import axios from 'axios';

export const baseURL = 'https://api.spacexdata.com/v5/launches';

type TContext = {
  isLoading: boolean;
  launches: TYPES.LaunchesProps[];
  // eslint-disable-next-line no-unused-vars
  getLaunches: (limit?: number) => void;
};

export const AppContext = createContext<TContext>({
  isLoading: false,
  launches: [],
  getLaunches: () => null,
});

type AppProviderProps = { children?: ReactElement };

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<unknown>(null);
  const [launches, setLaunches] = useState<TYPES.LaunchesProps[]>([]);

  const makeRequest = useCallback(async (method: string, url: string, body?: {}) => {
    setIsLoading(true);

    try {
      const resp = await axios({
        method,
        url,
        data: body,
      });

      const data = await resp?.data;
      return data;
    } catch (error) {
      console.log(error);
      setServerError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getLaunches = useCallback(
    async (limit: number) => {
      const launches = await makeRequest('post', `${baseURL}/query`, {
        options: { limit, populate: ['rocket', 'payloads'] },
      });
      setLaunches(launches.docs);
    },
    [makeRequest]
  );

  const providerValue = useMemo(() => {
    return {
      isLoading,
      launches,
      serverError,
      getLaunches,
    };
  }, [isLoading, launches, serverError, getLaunches]);

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>;
};
