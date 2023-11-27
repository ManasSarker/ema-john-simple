
import { useState } from "react";
import "./Shop.css"
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  
    const [products,setProducts]=useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddToCart=(product)=>{
        console.log("products are",product);
        let newCart=[...cart,product];
        setCart(newCart)
        console.log("Total carts are ",cart);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
               {
                products.map(product=><Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;