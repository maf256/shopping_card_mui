import { Grid } from "@mui/material";
import Item from './Item'
// import {getProducts} from './getProducts'
import { useEffect, useState } from "react";
import { all } from "axios";


export default function Content ({allSize, products,addToCart, setAddToCart, setCartCount, cartCount}) {    
    const [filterdProducts, setfilterdProducts] = useState(products)
    
    // const filtered = sizes => data?.filter(item=>sizes.some(el=>item.availableSizes.includes(el)))
    
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
    
    // async function fetchMyAPI() {
    //   let response
    //   response = require('./poroducts.json')
    //   //response = await fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
    //   //response = await response.json()
    //   setProducts(response.data.products)
    //   setfilterdProducts(response.data.products)

    // }

    // useEffect(()=> {
    //   fetchMyAPI()
    // },[])
    
    useEffect(() => {
      filterSize()
    }, [allSize]) 
    return (
        <Grid container spacing={5} >
            {filterdProducts?.map((product, index)=> {
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
            })}

        </Grid>
    )
} 