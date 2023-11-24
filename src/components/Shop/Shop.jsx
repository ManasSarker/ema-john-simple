
import { useState } from "react";
import "./Shop.css"
import { useEffect } from "react";

const Shop = () => {
  
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="shop-container">
            <div className="products-container">
                <h2>This is products </h2>
                <h2>{products.length}</h2>
            </div>
            <div className="cart-container">
                <h3>ORders summary</h3>
            </div>
        </div>
    );
};

export default Shop;