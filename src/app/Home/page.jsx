'use client'
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CardProducts from "../components/card";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' });
  return response.json();
}

const Home = async () => {

  const searchParams = useSearchParams();
  const productsJsonData = await fetchProducts();
  const products = productsJsonData.products;
  const username = searchParams.get('username');
  console.log(username);


  return (
    <Box>
      <Navbar username={username} />
      <Box>
        <Container>
          <Stack>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Grid container spacing={4}>
          {
            products.map((product) =>
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <CardProducts username={username} id={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price} />
              </Grid>
            )
          }
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
export default Home;
