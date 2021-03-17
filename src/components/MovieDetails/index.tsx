import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../../types/movie';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

interface Props {
  movie?: Movie;
}
export default function MovieDetails({ movie }: Props) {
  const classes = useStyles();

  return (
    // <main className={classes.content}>
    //   <div className={classes.toolbar} />

    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Box display="flex" flexDirection="row" width="30%">
        <Box>
          <img src={movie?.Poster} alt="poster" width={100} />
        </Box>
        <Box border={1}>
          <Box></Box>
          <Box>
            <Typography>CAST</Typography>
            <Typography>{movie?.Actors}</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" width="70%">
        <Typography variant="h6">
          <strong>Synopsis</strong>
        </Typography>
        <Typography paragraph>
          <strong>{movie?.Plot}</strong>
        </Typography>
      </Box>
    </Box>
    // </main>
  );
}
