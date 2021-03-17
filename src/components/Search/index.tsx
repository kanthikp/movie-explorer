import React from 'react';
import { TextField, InputAdornment, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onChange: (value: string) => void;
}
export default function Search({ onChange }: Props) {
  return (
    <Box width={1} pb={2}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(e) => onChange(e.target.value)}
      ></TextField>
    </Box>
  );
}
