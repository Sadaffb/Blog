import { Box, Link, Typography } from "@mui/material"


const Footer = () => {
  return (
    <Box sx={{bgcolor:'background.paper', p:6}} component='footer'>
        <Typography variant="h6"align="center" gutterBottom>Blog Footer</Typography>
        <Typography variant='body2' color='text.secondary' align='center'>
              Copyright @ {' '}
              <Link color='inherit' href="#"> My Website</Link>
              {' '}
              {new Date().getFullYear()}
            </Typography>
    </Box>
  )
}

export default Footer