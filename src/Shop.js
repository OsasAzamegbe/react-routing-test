import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
  const [items, setItems] = useState([])

  useEffect(() =>{
    const fetchItem = async () => {
      const url = 'https://fortnite-api.com/v2/shop/br/combined'
      const response = await fetch(url)
      const data = await response.json()
      const itemList = data.data.featured.entries
      console.log(itemList)
      setItems(itemList)
    }
    fetchItem();
  }, [])  

  return (
    <div>
      <h1>Shop</h1>
      {items.map(item => (
          <p key={item.offerId} >{item.devName}</p>
        ))}
    </div>
  );
}

export default Shop;
