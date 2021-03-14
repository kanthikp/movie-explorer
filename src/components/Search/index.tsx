import React from 'react';
import {TextField, InputAdornment,} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

interface Props{
    onChange:(value:string)=>void;
}
export default function Search({onChange}:Props){

    return(
        <TextField
        placeholder='Search'
        InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon/>
              </InputAdornment>
            )
          }}
          onChange={(e)=>onChange(e.target.value)}
        ></TextField>
    )
}