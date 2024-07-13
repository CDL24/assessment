import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { BASE_API } from '@shared-constants';

export const useApi = (key: string, endPoint: string) => {
  const {isLoading, data, error} =  useQuery({
    queryKey: [key],
    queryFn: () => {
     return axios.get(BASE_API+endPoint);
    },
  });
  return {isLoading, data, error};
};