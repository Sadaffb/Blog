'use client'
import { Box, Button, Grid, Paper, Typography, Rating } from "@mui/material";
import { useSearchParams } from "next/navigation"
import Navbar from "../components/navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const fetchProductDetail = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}
const page = async () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");
  const username = searchParam.get("username");
  const productDetail = await fetchProductDetail(id);
  console.log(username);
  return (
    <Box>
      <Navbar username={username} />
      <Grid container sx={{ height: "85vh", mt: 2 }}>
        <Grid item xs={12} sm={12} md={5} sx={{
          backgroundImage: `url(${productDetail.thumbnail})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%'
        }} />
        <Grid item elevation={6} square component={Paper} xs={12} sm={12} md={7}>
          <Box sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left'
          }}>
            <Typography variant='h3' sx={{
              mb: 3
            }}>
              {productDetail.title}
            </Typography>
            <Rating name="read-only" value={productDetail.reviews[0].rating} readOnly sx={{
              mb: 7,
              color: 'secondary.main'
            }} />
            <Typography variant="h5" sx={{
              mb: 10
            }}>
              {productDetail.description}
            </Typography>
            <Typography variant="h5" sx={{
              mb: 10
            }}>
              Price:    {productDetail.price}    $
            </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />} sx={{
              bgcolor: 'secondary.main'
            }}>Add to cart</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default page