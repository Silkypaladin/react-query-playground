import {useQuery} from "react-query";
import {UserResponse} from "../features/auth/data/user-response.model.ts";

const getMe = () => {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  return fetch(`${apiUrl}/api/v1/users/showMe`, {
    credentials: 'include',
  })
}

export const useMe = () => {
  return useQuery<UserResponse>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await getMe();
      if (!response.ok) {
        throw new Error('Could not fetch user data!')
      }
      return response.json()
    },
  });
}