import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Item(props) {
  const {id, title, price, installments, sku, isFreeShipping, setAddToCart, addToCart,setCartCount, cartCount} = props
  
  const imageUrlFront = require('./img/'+ sku + '-1.webp')
  const imageUrlBack = require('./img/'+ sku + '-2.webp')
  const [imageURL, setImageURL] = React.useState(imageUrlFront)
  

  function onClickHandle(id){
    if (addToCart.hasOwnProperty(id)){
      let tmp = addToCart[id];
      tmp++
      setAddToCart({
        ...addToCart,
        ...{[id]: tmp}
    })
    }else {
      setAddToCart({
        ...addToCart,
        ...{[id]: 1}
    })    
    }
    let tmp1 = cartCount + 1
    setCartCount(tmp1)
  }
  

  return (
    <CustomizedCard 
      sx={{ maxWidth: 345 } } 
      onMouseEnter={()=> setImageURL(imageUrlBack)} 
      onMouseLeave={()=> setImageURL(imageUrlFront)}
    >  
      { isFreeShipping &&
        <CustomizedTypography variant="body2" color="text.secondary">
          is Free Shipping
        </CustomizedTypography>
      }
      <CardMedia
        component="img"
        height="300"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          installments
        </Typography>
        <Typography variant="body2" color="text.secondary">
          or {installments} * {Math.round((price / installments) * 100) / 100}
        </Typography>
      </CardContent>
      <Button style={{width: '100%', height: '50px', backgroundColor: imageURL === require('./img/'+ sku + '-2.webp') ? 'yellow' : 'black'}} variant="contained" onClick={() => onClickHandle(id)}>Add to cart</Button>


      
      
      
    </CustomizedCard>
  );
}


const CustomizedTypography = styled(Typography)`
  position: absolute;
  color: white;
  background-color: black;
  right: 0;
  font-size: 0.6em;
  padding: 5px 5px;
`;

const CustomizedCard = styled(Card)`
  position: relative;
`