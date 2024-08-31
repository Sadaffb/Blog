'use client'
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const username = data.get("username");
        router.push(`/Home?username=${username}`);
    }
    return (
        <Grid container sx={{ height: "98vh" }}>
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundImage: `url("/purple.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }} />
            <Grid item elevation={6} square component={Paper} xs={12} sm={8} md={5}>
                <Box sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                    <Typography variant='h5'> Sign in</Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField required fullWidth margin='normal' id='username' name='username' label='User Name' autoFocus></TextField>
                        <TextField required fullWidth type='password' margin='normal' id='password' name='password' label='Password' autoFocus></TextField>
                        <FormControlLabel control={<Checkbox />} label="Remmeber me" />
                        <Button fullWidth type='submit' variant='contained' sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}>Sign in</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant='body2'>Forget Password?</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant='body2'>Don't have an accont? Sign Up</Link>
                            </Grid>
                        </Grid>
                        <Typography variant='body2' color='text.secondary' align='center'>
                            Copyright @ {' '}
                            <Link color='inherit' href="#"> My Website</Link>
                            {' '}
                            {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login