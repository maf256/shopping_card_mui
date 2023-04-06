import { Grid, Badge, Drawer, LinearProgress, IconButton } from "@mui/material";
import Content from "./componnents/Content";
import CheckBox from './componnents/CheckBox'
import React from "react";
import { useEffect, useState } from "react";
import Cart from "./componnents/Cart";
import { AddShoppingCart } from "@material-ui/icons";
import styled from "styled-components";




function App() {
  const [allSize, setAllSite] = React.useState({})  
  const [cartOpen, setCartOpen] = React.useState(false);
  // const [cartItems, setCartItems] = React.useState([]);
  const [products, setProducts] = useState([])
  const [addToCart, setAddToCart] = useState({})
  const [cartCount, setCartCount] = useState(0)
  

  
    async function fetchMyAPI() {
      let response
      response = require('./componnents/poroducts.json')
      //response = await fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
      //response = await response.json()
      setProducts(response.data.products)
      // setfilterdProducts(response.data.products)

    }

    useEffect(()=> {
      fetchMyAPI()
    },[])  
  

  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          products={products}
          addToCart={addToCart}
          setAddToCart={setAddToCart} 
          cartCount={cartCount}
          setCartCount={setCartCount}             
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={cartCount} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container direction={"column"}>
        <Grid container>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}>
            <CheckBox allSize= {allSize} setAllSite= {setAllSite} />
          </Grid>
          <Grid item xs={12} sm={8}>
            {products.length ? <Content 
              allSize={allSize} 
              products={products}
              addToCart={addToCart}
              setAddToCart={setAddToCart} 
              cartCount={cartCount}
              setCartCount={setCartCount}             
            /> : ''} 
          </Grid>          
          <Grid item xs={0} sm={2}/>        
        </Grid>      
      </Grid>
    </>
  );
}

export default App;

const StyledButton = styled(IconButton)`  
  position: fixed !important;
  z-index: 100;
  right: 20px;
  top: 20px;
`;


