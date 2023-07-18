export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export type Action = { type: 'LOGIN', payload: string } | { type: 'LOGOUT' } | { type: 'REGISTER' };
