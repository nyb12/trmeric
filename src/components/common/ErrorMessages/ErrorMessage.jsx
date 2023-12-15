import { Box, Typography } from '@mui/material';
import React from 'react';
import { FontSizes } from '../../../constants/Sizes';
import Colors from '../../../constants/Colors';

function ErrorMessage({ error }) {
  return (
    <Box>
      <Typography sx={{ fontSize: FontSizes.fontTen, color: Colors.red }}>
        {error}
      </Typography>
    </Box>
  );
}

export default ErrorMessage;
