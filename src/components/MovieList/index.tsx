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
}

const movieData: Movie[] = [
  {
    imdbID: 'sdfsdf',
    title: 'asddfhgdfh',
    cast: ['asd', 'dsfg'],
    duration: '100 min',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    synopsis: 'sadfsdf',
    year: '2020',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  },
  {
    imdbID: 'ssddfsdf',

    title: 'asdfghfdgh',
    cast: ['asd', 'dsfg'],
    duration: '100 min',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    synopsis: 'sadfsdf',
    year: '2020',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  },
  {
    imdbID: 'sdfsdfsdf',

    title: 'asderteert',
    cast: ['asd', 'dsfg'],
    duration: '100 min',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    synopsis: 'sadfsdf',
    year: '2020',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  }
];
export default function MovieList({ movies }: Props) {
  const classes = useStyles();
  return (
    <>
      {movieData?.map((movie, index) => {
        return (
          <MovieTile
            key={`movie-${index}`}
            movie={movie}
            onSelect={(id: string) => {
              alert(id);
            }}
          />
        );
      })}
    </>
  );
}
