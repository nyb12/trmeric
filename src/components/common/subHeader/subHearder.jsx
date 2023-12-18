import * as React from 'react';

// importing material UI components
import { Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function SubHeader() {
  const steps = ['Discover', 'Engage', 'Build', 'Transact'];
  return (
    <>
      <AppBar position='fixed' style={{ zIndex: 2222, marginTop: '70px' }}>
        <Paper square sx={{ padding: 2, color: '#000', background: '#fff' }}>
          <Typography>Digital Inventory System</Typography>
        </Paper>
      </AppBar>
    </>
  );
}
