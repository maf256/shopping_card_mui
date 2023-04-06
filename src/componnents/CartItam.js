import { Button } from "@mui/material";
// import { CartItemType } from "../App";

import { Wrapper } from "./CartItemstyles";

const CartItem = ({ title, price, id, addToCart,setAddToCart, setCartCount, cartCount, sku }) => {
  const imageUrlFront = require('./img/'+ sku + '-1.webp')

  function addtocart(id){
    let tmp = parseInt(addToCart[id])
    tmp++
    setAddToCart({
      ...addToCart,
      ...{[id]: tmp}
    })
    let tmp2 = cartCount + 1
    setCartCount(tmp2)
  }
  
  function removefromcart(id){
    let tmp = parseInt(addToCart[id])
    let tmp2 = cartCount - 1
    setCartCount(tmp2)
    if (tmp === 1){
      let copyObj = JSON.parse(JSON.stringify(addToCart));

      delete copyObj[id];
      setAddToCart(copyObj)
    }else {
      tmp--
      console.log('tmp =>',tmp);
      console.log('id =>',id);
      setAddToCart({
        ...addToCart,
        ...{[id]: tmp}
      })
    }
    console.log('addToCart =>',addToCart);
  }
  return (
    <Wrapper>
      <div>
        <h3>{title}</h3>
        <div className="information">
          <p>Price: ${price}</p>
          <p>Total: ${price}</p>
          <p>Quantity: {addToCart[id]}</p>          
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removefromcart(id)}
          >
            -
          </Button>
          <p>{price}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addtocart(id)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={imageUrlFront} alt={''} />
    </Wrapper>
  );
};

export default CartItem;
