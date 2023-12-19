import React from 'react';

import { Box } from '@mui/material';

const TrText = (props) => {
  const { title, style, sx, className } = props;

  return (
    <Box className={className} style={style} sx={sx}>
      {title}
      {props.children}
    </Box>
  );
};

export default TrText;
