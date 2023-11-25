import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product, onAddToCart, onAddToFav }) => {
  const { name, image, price } = product;

//   console.log(product);
const handleAddToCart = () => {
    // Trigger the addToCart function passed as a prop
    onAddToCart(product);
    alert("Product added to cart")
  };
  const handlefav = () => {
    // Trigger the addToCart function passed as a prop
    onAddToFav(product);
    alert("Product added to favourites")
  };

  return (
    <div className="pro" style={{width:'400px', maxWidth:'350px'}}>
        <img src={image} alt={name}  height={400} width={500}/>
        <div className="des">
            {/* <span>Aesthetic</span> */}
            <h5>{name}</h5>
            <div className="star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h4>&#8377;{price}</h4>
        </div>
        <Link to="#"><i className="fa fa-solid fa-heart cart"  style={{position:'absolute',top:15,right:10, backgroundColor:'pink'}} aria-hidden="true" onClick={handlefav}></i></Link>
        <Link to="#"><i className="fa fa-cart-arrow-down cart"  aria-hidden="true" onClick={handleAddToCart}></i></Link>
    </div>
  );
};

export default Product;
