import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

interface Props {
  totalMovieRecords: number;
  pageSize: number;
  onChange: (value: number) => void;
}
export default function Paginator({ totalMovieRecords, pageSize, onChange }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalMovieRecords / pageSize);
  return totalPages > 0 ? (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="350px" mt="auto">
      <Button
        variant="outlined"
        size="small"
        aria-label="prev"
        onClick={() => {
          setCurrentPage(currentPage - 1);
          onChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </Button>
      <Typography>
        Pages {currentPage}/{totalPages}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        aria-label="next"
        onClick={() => {
          setCurrentPage(currentPage + 1);
          onChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        <ArrowRightIcon />
      </Button>
    </Box>
  ) : (
    <></>
  );
}
