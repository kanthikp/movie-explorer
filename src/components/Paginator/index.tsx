import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
);
interface Props {
  totalMovieRecords: number;
  pageSize: number;
  onChange: (value: number) => void;
}
export default function Paginator({ totalMovieRecords, pageSize, onChange }: Props) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <IconButton
        aria-label="prev"
        onClick={() => {
          setCurrentPage(currentPage - 1);
          onChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </IconButton>
      <Typography>
        Pages {currentPage}/{Math.ceil(totalMovieRecords / pageSize)}
      </Typography>
      <IconButton
        aria-label="next"
        onClick={() => {
          setCurrentPage(currentPage + 1);
          onChange(currentPage + 1);
        }}
        disabled={currentPage === Math.ceil(totalMovieRecords / pageSize)}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
}
