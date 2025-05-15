<Card>
  <CardContent>
    <Typography variant="h5" component="div" gutterBottom>
      Overview
    </Typography>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  </CardContent>
</Card>
