import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function ColorChips({keywords, setSearchedStudies}) {
  const navigate = useNavigate();

  const newSearch = async(word) => {
    try {

        const response = await axios.get('/api/search/expression',{ params: {exp: word}});
        console.log(response.data);
        setSearchedStudies(response.data);
        navigate('/search');

    } catch(err) {
      console.log(err);
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={1} alignItems="flex-start" sx={{mt: 1.5}}>
      <Stack direction="row" spacing={1} sx={{flexWrap: 'wrap', gap: 0.5}}>
        {keywords.map((word) => {
          return <Chip onClick={() => {newSearch(word)}} key={word} label={word} color="primary" variant='outlined'/>
        })}
      </Stack>
    </Stack>
    </ThemeProvider>
  );
}

