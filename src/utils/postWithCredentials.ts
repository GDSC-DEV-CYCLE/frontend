import axios from 'axios';

import { useAuthStore } from '../store/AuthStore';

const { VITE_APP_API_URL } = import.meta.env;

const postWithCredentials = <T, R>(url: string, data: T) => {
  const { accessToken } = useAuthStore.getState();

  const response = axios.post<R>(`${VITE_APP_API_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export default postWithCredentials;
