import { Grid } from "@mui/material";
import Item from './Item'
import { useEffect, useState } from "react";


export default function Content ({allSize, products,addToCart, setAddToCart, setCartCount, cartCount}) {    
    const [filterdProducts, setfilterdProducts] = useState(products)
    
    useEffect(() => {
      function filterSize(){
        if (products.length === 0){
          return
        }
        if (Object.keys(allSize).length === 0 && products.length > 0){
          setfilterdProducts(products)
          return
        }
        let tmpData = []
        for (let i = 0; i < products.length; i++){
          for(let j = 0; j < products[i].availableSizes.length; j++){
            if (allSize.hasOwnProperty(products[i].availableSizes[j])){
              tmpData.push(products[i])
              break
            }
          }
        }
        setfilterdProducts(tmpData)
      }
      filterSize()
    }, [allSize, products]) 
    
    return (
        <Grid container spacing={5} >
        {
          filterdProducts?.map((product, index)=> {
          return (
              <Grid key={index} item xs={12} sm={6} md={3} >
                  <Item 
                    {...product}
                    setAddToCart={setAddToCart}
                    addToCart={addToCart}
                    setCartCount={setCartCount}
                    cartCount={cartCount}
                  />
              </Grid>
          )
          })
        }
        </Grid>
    )
} 