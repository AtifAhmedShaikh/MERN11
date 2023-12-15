import React from "react";
import data from "../data/products.json";
export default function Products() {
  return <div>
    {
      data.map(item=>{
        return <div key={item.productId}>
          <img src="" className="w-10 h-10"  alt="" />
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.name}</p>
        </div>
      })
    }
    {JSON.stringify(data)}
  </div>;
}
