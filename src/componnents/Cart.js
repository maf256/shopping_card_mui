import { Button } from "@mui/material";
import CartItem from "./CartItam";
import styled from "styled-components";

const Cart = ({ products,addToCart, setAddToCart, setCartCount, cartCount }) => {
  let totalPrice = 0;
  console.log('cartCount =>',cartCount);

  function findByID(id){
    let obj = products.find(o => o.id === Number(id));
    return obj
  }

  function cartItem(){
    let cartItems = []
    for (const id in addToCart) {
      for (let i = 0; i < parseInt(addToCart[id]); i++){
        totalPrice = totalPrice + findByID(id)?.price;
      }
      cartItems.push(
        <CartItem
          key={id}
          title={findByID(id)?.title}
          price={findByID(id)?.price}
          id={id}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
          setCartCount={setCartCount}
          cartCount={cartCount}
          sku={findByID(id)?.sku}
        />
      )
    }
    return (cartItems)
  }



  return (
    <Container>
      <h2>Your Cart</h2>
      
        {cartCount === 0 ? <p>No items in cart.</p> : null}
        
        {
          cartItem()
        }

        <h2>Total: ${totalPrice}</h2>
        <ButtonCheckout
          variant = "contained"
          disabled = { cartCount === 0 ? true : false}
          
          
          // onClick={}
        >
          CHECKOUT
        </ButtonCheckout>

    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 500px;
  padding: 20px;
  `
  
  const ButtonCheckout = styled(Button)`
    width: 100%;
  
  `



        // {products.map((item) => (
        //   <CartItem
        //     key={item.id}
        //     item={item}
        //     addToCart={addToCart}
        //     // removeFromCart={removeFromCart}
        //   />
        // ))}

    //   {cartItems.length === 0 ? <p>No items in cart.</p> : null}
    //   {cartItems.map((item) => (
    //     <CartItem
    //       key={item.id}
    //       item={item}
    //       addToCart={addToCart}
    //       removeFromCart={removeFromCart}
    //     />
    //   ))}
    //   <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
