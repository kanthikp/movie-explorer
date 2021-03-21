import React, { useState } from 'react';
import { Movie } from '../../types/movie';
import { Box } from '@material-ui/core';
import MediaCard from '../MovieTile/mediaCard';

interface Props {
  movies?: Movie[];
  onSelect: (imbdId: string) => void;
}

export default function MovieList({ movies, onSelect }: Props) {
  const [selected, setSelected] = useState('');
  return (
    <Box width={1} mb={2} style={{ overflowY: 'scroll' }}>
      {movies?.map((movie, index) => {
        return (
          <MediaCard
            key={`movie-${index}`}
            movie={movie}
            onSelect={(id: string) => {
              onSelect(id);
              setSelected(id);
            }}
            selected={selected === movie.imdbID}
          />
        );
      })}
    </Box>
  );
}
