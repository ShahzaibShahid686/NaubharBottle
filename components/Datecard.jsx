// components/DateCard.jsx
import * as React from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateCard() {
  const [value, setValue] = React.useState(new Date());

  return (
    <Card sx={{ maxWidth: 300, margin: '1rem' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Select Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Pick a Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
}
