import {UserResponse} from "../../auth/data/user-response.model.ts";
import {axios} from "../../../lib/axios.ts";

export const getMe = (): Promise<UserResponse> => {
  return axios.get('/api/v1/users/showMe');
}
