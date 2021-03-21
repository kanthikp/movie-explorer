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
  return (
    // <main className={classes.content}>
    //   <div className={classes.toolbar} />

    <Box display="flex" alignItems="flex-start" flexDirection="column">
      <Box height="20vh" width={1} display="flex" justifyContent="flex-start">
        <Box mt="auto" ml={8} mb={3}>
          <Typography variant="h4">{movie?.Title}</Typography>
          <Typography variant="body1">({movie?.Year})</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" height="85vh">
        <Box display="flex" flexDirection="column" width="20%">
          <Box display="flex" pt={2} ml={8}>
            <img src={movie?.Poster} alt="poster" width={200} />
          </Box>

          {/* <Box display="flex" pt={2} ml={8}>
            
          </Box>

          <Box border={1} display="flex" pt={2} mr={2} width="50%">
            <Box border={1} display="flex">
              <Box border={1}>
                <Typography variant="body1" color="textSecondary">
                  LANGUAGE
                </Typography>
                <Typography variant="body1">{movie?.Language}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="textSecondary">
                  DURATION
                </Typography>
                <Typography variant="body1">{movie?.Runtime}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>CAST</Typography>
              <Typography>{movie?.Actors}</Typography>
            </Box>
          </Box> */}
        </Box>
        <Box display="flex" flexDirection="column" width="70%" p={2}>
          <Typography variant="h6">
            <strong>Synopsis</strong>
          </Typography>
          <Typography paragraph>
            <strong>{movie?.Plot}</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
    // </main>
  );
}
