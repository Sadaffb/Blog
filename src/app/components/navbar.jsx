import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar({username}){
    return(
        <Box sx={{width: '100wv'}}>
            <AppBar position="static" sx={{ bgcolor:'secondary.main'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow:1}}>Shopping Website</Typography>
                <Button endIcon={<AccountCircle/>} color='inherit' size='medium'>
                    {username}
                </Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}