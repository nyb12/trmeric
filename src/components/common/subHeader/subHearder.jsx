import * as React from 'react';

// importing material UI components
import { Box, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function SubHeader({ detailedPage }) {
  const navigate = useNavigate();
  const steps = ['Discover', 'Engage', 'Build', 'Transact'];
  return (
    <>
      <AppBar position='fixed' style={{ zIndex: 2222, marginTop: '70px' }}>
        <Paper square sx={{ padding: 2, color: '#000', background: '#fff' }}>
          <Box className='display-row-flex-start'>
            {detailedPage ? (
              <ArrowBackIcon
                onClick={() => {
                  navigate(-1);
                }}
                sx={{ cursor: 'pointer' }}
              />
            ) : (
              <></>
            )}
            {detailedPage ? (
              <Typography>NexaTech Solution</Typography>
            ) : (
              <Typography>Digital Inventory System</Typography>
            )}
          </Box>
        </Paper>
      </AppBar>
    </>
  );
}
