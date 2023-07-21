import {axios} from "../../../lib/axios.ts";

export const logout = (): Promise<string> => {
  return axios.get('/api/v1/auth/logout');
}