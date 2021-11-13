import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

export const HomeScreen = () => {
  const { products } = useSelector((state) => state.inventory);
  const [loading,setLoading] = useState(true)
  setTimeout(()=>{
    setLoading(false)
  },1500)
  return (
    <>
    {loading?(
         <div
         className="d-flex justify-content-center"
         style={{ color: "white", marginTop: "200px" }}
       >
         <div className="spinner-border" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>
       </div>
    ):(
      <div className="cards-container mt-4 mb-3">
         <div className="title-container" style={{color:'white',width:'100vw',textAlign:'center',marginBottom:'20px'}}>
            <h1>Your Inventory</h1>
          </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.length <= 0 ? (
          <div className="title">
            <h1 style={{color:'white',width:'100vw'}}>You Dont Have Products Yet</h1>
          </div>
        ) : 
        
        (
          products?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
    )}
    
    </>
  );
};
