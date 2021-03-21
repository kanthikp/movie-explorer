import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../../types/movie';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '60px',
      borderRadius: 0,

      margin: 1,
      '&:hover': {
        background: 'linear-gradient(to right, #ebeef5, #baccf5)'
      }
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      display: 'flex',
      flexDirection: 'column'
    },
    cover: {
      width: '40px'
      //   height: '40px'
    },
    selected: {
      background: 'linear-gradient(to right, #ebeef5, #baccf5)'
    }
  })
);

interface Props {
  movie: Movie;
  onSelect: (movieId: string) => void;
  selected: boolean;
}

export default function MediaCard({ movie, selected, onSelect }: Props) {
  const classes = useStyles();
  return (
    <Card
      className={`${classes.root} ${selected && classes.selected}`}
      variant="outlined"
      onClick={() => {
        onSelect(movie.imdbID);
      }}
    >
      <CardMedia className={classes.cover} image={movie.Poster} />

      <CardContent className={classes.content}>
        <Typography variant="body1">
          <strong>{movie.Title.length > 30 ? `${movie.Title.substring(0, 30)}...` : movie.Title}</strong>
        </Typography>
        <Typography variant="body2">({movie.Year})</Typography>
      </CardContent>
    </Card>
  );
}
