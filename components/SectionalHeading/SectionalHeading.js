import { Typography } from '@mui/material';
import React from 'react';

const SectionalHeading = ({ variant, align, color, title, fontSize, style }) => {
  return (
    <Typography
      className="SectionalHeading"
      variant={variant}
      align={align}
      style={{ color: color, fontSize, ...style }}
    >
      {title}
    </Typography>
  );
};

export default SectionalHeading;


// import { Typography } from '@mui/material'
// import React from 'react'

// const SectionalHeading = ({ variant, align, color, title, fontSize, style }) => {
//   return (
//     <>
//       <Typography className="SectionalHeading" variant={variant} align={align} style={{ color: color, fontSize }}>{title}</Typography>
//     </>
//   )
// }

// export default SectionalHeading