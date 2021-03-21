import React from 'react';
import { TextField, InputAdornment, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onChange: (value: string) => void;
}
export default function Search({ onChange }: Props) {
  return (
    <Box width={1} pb={2} mb="auto">
      <TextField
        fullWidth
        type="search"
        variant="outlined"
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(e) => onChange(e.target.value)}
      ></TextField>
    </Box>
  );
}
