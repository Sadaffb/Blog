import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Paper } from '@mui/material';

function loading() {
  return (
    <Box
    sx={{
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        height: '30vh',
        bgcolor: 'background.paper',
        pt: 2,
        px: 4,
        pb: 3,
    }}>
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </React.Fragment>
    </Box>
  );
}

export default loading