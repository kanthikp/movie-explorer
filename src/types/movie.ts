import * as t from 'io-ts';

export function tOptional<T extends t.Mixed>(someType: T) {
  return t.union([t.null, t.undefined, someType]);
}

export const MovieCodec = t.type({
  imdbID: t.string,
  Title: t.string,
  Year: t.string,
  Poster: t.string,
  Runtime: tOptional(t.string),
  Actors: tOptional(t.string),
  Language: tOptional(t.string),
  Plot: tOptional(t.string)
});

export const MovieSearchResponseCodec = t.type({
  Response: t.string,
  Search: tOptional(t.array(MovieCodec)),
  totalResults: tOptional(t.number),
  Error: tOptional(t.string)
});

export const MovieDetailsResponseCodec = t.type({
  Response: tOptional(t.string),
  Error: tOptional(t.string)
});

export type Movie = t.TypeOf<typeof MovieCodec>;
export type MovieSearchResponse = t.TypeOf<typeof MovieSearchResponseCodec>;
export type MovieDetailsResponse = t.TypeOf<typeof MovieDetailsResponseCodec>;
