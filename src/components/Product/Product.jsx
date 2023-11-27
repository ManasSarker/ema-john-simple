/* eslint-disable react/prop-types */

import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   
    // eslint-disable-next-line react/prop-types
    const {img,seller,price,ratings}=props.product;
   const handelAddToCart=props.handelAddToCart;

    return (
        <div className='product'>
       <img src={img} alt="shoes" />
      <div className='product-info'>
      {/* <h1 className='product-name' >{props.product.name}</h1> */}
       <p>Price: ${price}</p>
       <p>Manufacturer:{seller}</p>
       <p>Rating:{ratings} stars</p>
      </div>
      <button className='btn-cart'onClick={()=>handelAddToCart(props.product)}  > Add to Car
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
        </div>
    );
};

export default Product;