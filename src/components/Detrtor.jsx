import React, { useState } from "react";

function Detrator() {
    const [data, setData] = useState([]);

  //Get Method
  const apiGet = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      <button onClick={apiGet}>Get Posts</button>
    

      {data.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
}

export default Detrator;
//As you mentioned in task not to use extra div to I have not added for styling