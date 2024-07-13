import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

export const useApi = (key: string, endPoint: string) => {
  const {isLoading, data, error} =  useQuery({
    queryKey: [key],
    queryFn: () => {
     return axios.get(endPoint);
    },
  });
  return {isLoading, data, error};
};