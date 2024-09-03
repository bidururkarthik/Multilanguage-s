// src/components/Settings.js
import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Settings({ language, setLanguage }) {
  return (
    <Box sx={{ mb: 4 }} style={{marginTop:"30px"}}>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Select Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          label="Select Language"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Settings;
