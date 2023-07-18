import {useQuery} from "react-query";
import {UserResponse} from "../features/auth/data/user-response.model.ts";
import {getMe} from "../features/users/api/getMe.ts";

export const useMe = () => {
  return useQuery<UserResponse>({
    queryKey: ['user'],
    queryFn: getMe
  });
}