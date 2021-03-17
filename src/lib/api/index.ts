import axios, { AxiosResponse } from 'axios';

import environment from '../environment';
export const apiEndpoint = environment.API_ENDPOINT;
export const apiKey = environment.APIKEY;
export const apiUrl = `${apiEndpoint}?apikey=${apiKey}`;

export const api = axios.create({
  paramsSerializer: (params: any) => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }
});

export interface FetchInstruction<T> {
  params: T;
}

export function fetch<T>({ params }: FetchInstruction<T>): Promise<AxiosResponse<any>> {
  return api.get(apiUrl, { params: params });
}
