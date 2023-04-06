import { Button } from "@material-ui/core";
import CartItem from "./CartItam";
import styled from "styled-components";

const Cart = ({ products,addToCart, setAddToCart, setCartCount, cartCount }) => {
  let totalPrice = 0;
  console.log('cartCount =>',cartCount);

function findByID(id){
  let obj = products.find(o => o.id == id);
  return obj
}

function jasem(){
  let j = []
  for (const prop in addToCart) {
    for (let i = 0; i < parseInt(addToCart[prop]); i++){
      totalPrice = totalPrice + findByID(prop).price;
    }
     j.push(
        <CartItem
          key = {prop}
          title = {findByID(prop).title}
          price = {findByID(prop).price}
          id = {prop}
          addToCart = {addToCart}
          setAddToCart = {setAddToCart}
          setCartCount = {setCartCount}
          cartCount = {cartCount}
          sku = {findByID(prop).sku}
        />
     )
  }
  return (j)
  }



  return (
    <Container>
      <h2>Your Cart</h2>
      
        {cartCount === 0 ? <p>No items in cart.</p> : null}
        
        {
          jasem()
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
