import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [data, setData] = useState([]);

  const {handlecartdata} = useContext(CartContext);

  useEffect(() => {
    axios.
    get(" http://localhost:8080/products")
    .then((res) => setData(res.data))
  },[])

  const handleadd = (value) => {
    data.map((el,ind) => {
      if(ind === value){
        axios.post(" http://localhost:8080/cartItems",{
          productId:el.id,
          count:1
        })
        axios.get("http://localhost:8080/cartItems")
        .then((res) => handlecartdata(res.data))
      }
    })
  }



  return <div>
    {data.map((el,ind) => (
      <div key={ind}>
        <p>{el.name}</p>
        <p>{el.description}</p>
        <button onClick={() => handleadd(ind)} >Add to cart</button>
      </div>
    ))}
  </div>;
};

export default Products;
