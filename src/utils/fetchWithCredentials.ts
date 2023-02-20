import axios from 'axios';

import { useAuthStore } from '../store/AuthStore';

const { VITE_APP_API_URL } = import.meta.env;

const fetchWithCredentials = async <T>(url: string) => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.get<T>(`${VITE_APP_API_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export default fetchWithCredentials;
