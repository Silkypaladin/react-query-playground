import {UserResponse} from "../data/user-response.model.ts";
import {axios} from "../../../lib/axios.ts";

export interface LoginCredentialsDto {
  email: string;
  password: string;
}

export const login = (payload: LoginCredentialsDto): Promise<UserResponse> => {
  return axios.post('/api/v1/auth/login', payload);
}
