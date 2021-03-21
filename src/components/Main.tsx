import React, { useState } from 'react';

import Search from './Search';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import Paginator from './Paginator';
import { Box } from '@material-ui/core';
import { Movie, MovieSearchResponse, MovieDetailsResponse } from '../types/movie';
import { fetchCollection, fetchDetails } from '../repo/movie';

export default function Main() {
  // const classes = useStyles();

  const [searchString, setSearchString] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [totalMovieRecords, setTotalMovieRecords] = useState(0);

  const fetchMovieDetails = (imdbId: string) => {
    fetchDetails({ i: imdbId, plot: 'full' }).then((resp: MovieDetailsResponse | Movie) => {
      try {
        setSelectedMovie(resp as Movie);
      } catch {}
    });
  };
  const fetchMovies = (params: any) => {
    fetchCollection(params).then((resp: MovieSearchResponse) => {
      if (resp.Response === 'True') {
        setMoviesData(resp.Search || []);
        setTotalMovieRecords(resp.totalResults || 0);
      }
    });
  };
  const onPageChange = (pageNumber: number) => {
    fetchMovies({ s: searchString, type: 'movie', page: pageNumber });
  };

  return (
    <Box width={1} height="100vh" display="flex">
      <Box display="flex" alignItems="flex-start" flexDirection="column" justifyContent="flex-start" p={2} height="90%">
        <Search
          onChange={(value: string) => {
            setSearchString(value);
            setSelectedMovie(undefined);
            fetchMovies({ s: searchString, type: 'movie' });
          }}
        />
        {/* <Divider /> */}
        <MovieList
          movies={moviesData}
          onSelect={(imdbId: string) => {
            // setSelectedMovie(moviesData.find((m) => m.imdbID === imdbId));
            fetchMovieDetails(imdbId);
          }}
        />
        {/* <Divider /> */}
        <Paginator
          totalMovieRecords={totalMovieRecords}
          pageSize={10}
          onChange={(value: number) => {
            onPageChange(value);
          }}
        />
      </Box>
      <Box minWidth="70vw" display="flex" border="1">
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </Box>
    </Box>
  );
}
