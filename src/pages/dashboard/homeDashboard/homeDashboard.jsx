import React from 'react';
import AccordionCard from '../../../components/common/AccordionCard/AccordionCards';
import Modal from '../../../components/common/Modal/modal';
import Multitabs from '../../../components/common/MultiTabs/Multitabs';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../../../components/common/layout/Layout';

function HomeDashboard() {
  return (
    <div>
      <Layout />
      <Box
        component='main'
        className='flex-center'
        sx={{
          flexGrow: 1,
          p: 2,
          marginLeft: '150px',
          marginTop: '100px',
        }}
      >
        <Paper
          elevation={1}
          sx={{
            background: '#ff',
            marginLeft: '1%',
            padding: '4%',
            width: '90%',
          }}
        >
          <Box sx={{ mt: '20px' }}>
            <Multitabs />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default HomeDashboard;
