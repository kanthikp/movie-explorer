import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Movie from '../../types';
import MovieTile from '../MovieTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
);
interface Props {
  movies?: Movie[];
  onSelect: (imbdId: string) => void;
}

export default function MovieList({ movies, onSelect }: Props) {
  const classes = useStyles();
  return (
    <>
      {movies?.map((movie, index) => {
        return (
          <MovieTile
            key={`movie-${index}`}
            movie={movie}
            onSelect={(id: string) => {
              onSelect(id);
            }}
          />
        );
      })}
    </>
  );
}
