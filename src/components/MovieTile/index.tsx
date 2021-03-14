import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Movie from '../../types';
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
  const classes = useStyles();
  return (
    <Box border={1} display="flex" alignItems="center" onClick={() => onSelect(movie.imdbID)}>
      <Box width="30%">
        <img src={movie.thumbnail} style={{ width: '50px' }} alt={movie.title} />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Typography variant="body1">
          <strong>{movie.title}</strong>
        </Typography>
        <Typography variant="body2">({movie.year})</Typography>
      </Box>
    </Box>
  );
}
