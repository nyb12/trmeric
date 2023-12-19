import React from 'react';

import { Box } from '@mui/material';

const TrText = (props) => {
  const {
    title,
    type,
    style,
    numberOfLines,
    ellipsizeMode,
    onPress,
    sx,
    className,
  } = props;

  return (
    <Box
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
      className={className}
      style={style}
      sx={sx}
    >
      {title}
      {props.children}
    </Box>
  );
};

export default TrText;
