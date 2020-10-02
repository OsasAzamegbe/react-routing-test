import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(() =>{
    const fetchItem = async () => {
      const url = 'https://fortnite-api.com/v2/shop/br/combined'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }
    fetchItem();
  }, [])


  

  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

export default Shop;
