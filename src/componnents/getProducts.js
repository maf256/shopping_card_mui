import axios from 'axios';
// const isProduction = process.env.NODE_ENV === 'production';

export  const getProducts = async () => {
  let response;

    response = await axios.get(
      'https://react-shopping-cart-67954.firebaseio.com/products.json'
    ).catch(
          response = require('./poroducts.json')
    )
  
  const { products } = response.data || [];

  return products;
};
