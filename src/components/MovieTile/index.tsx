import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../../types/movie';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
);
interface Props {
  movie: Movie;
  onSelect: (movieId: string) => void;
}

export default function MovieTile({ movie, onSelect }: Props) {
  return (
    <Box borderBottom={1} display="flex" alignItems="center" onClick={() => onSelect(movie.imdbID)}>
      <Box width="30%">
        <img src={movie.Poster} style={{ width: '40px', height: '40px' }} alt="poster" />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Typography variant="body1">
          <strong>{movie.Title}</strong>
        </Typography>
        <Typography variant="body2">({movie.Year})</Typography>
      </Box>
    </Box>
  );
}
