import { map } from 'ramda';
import { fetch } from '../lib/api';
import { Movie, MovieSearchResponse, MovieDetailsResponse } from '../types/movie';

function mapToModel(data: object): MovieSearchResponse {
  return data as MovieSearchResponse;
}

export async function fetchCollection(params?: any): Promise<MovieSearchResponse> {
  return fetch({
    params: params
  }).then((response) => response.data);
}

export async function fetchDetails(params?: any): Promise<MovieDetailsResponse | Movie> {
  return fetch({
    params: params
  }).then((response) => response.data);
}
