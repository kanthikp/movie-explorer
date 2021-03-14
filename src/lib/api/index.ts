import axios, { AxiosResponse } from 'axios';

import environment from '../environment';
export const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=3944cd0a'; //`${environment.API_ENDPOINT}/?apikey=${environment.APIKEY}`;

export const api = axios.create({
  paramsSerializer: (params: any) => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }
});

export function fetch({ params }: any): Promise<AxiosResponse<any>> {
  return api.get(apiUrl, { params: params });
}
