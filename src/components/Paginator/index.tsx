import React from 'react';
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
  totalPages: number;
  currentPage: number;
  onChange: (value: number) => void;
}

export default function Paginator({ totalPages, currentPage, onChange }: Props) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <IconButton aria-label="prev" onClick={() => onChange(currentPage++)}>
        <ArrowLeftIcon />
      </IconButton>
      <Typography>
        Pages{currentPage}/{totalPages}
      </Typography>
      <IconButton aria-label="next" onClick={() => onChange(currentPage--)}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
}
