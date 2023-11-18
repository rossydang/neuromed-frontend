'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectProtein() {
  const [protein, setProtein] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProtein(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Protein</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={protein}
          label="protein"
          onChange={handleChange}
        >
          <MenuItem value={"p1"}>Protein 1</MenuItem>
          <MenuItem value={"p2"}>protein 2</MenuItem>
          <MenuItem value={"p3"}>protein 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}