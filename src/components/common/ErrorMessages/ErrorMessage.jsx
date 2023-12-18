import { Box } from '@mui/material';
import React from 'react';
import { FontSizes } from '../../../constants/Sizes';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

function ErrorMessage({ error }) {
  return (
    <Box>
      <Box
        sx={{
          fontSize: FontSizes.fontTen,
          color: Colors.red,
          fontFamily: Fonts.PoppinsSemiBold,
        }}
      >
        {error}
      </Box>
    </Box>
  );
}

export default ErrorMessage;
