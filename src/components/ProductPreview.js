import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPreview = ({ cart, setCart }) => {
  // Use product data to display detailed information
  const [product, setProducts] = useState([]);
  const { id } = useParams();

  const addToCart = () => {
    console.log(product);
    setCart([...cart, product]); // Update the cart by adding the selected product
  };
  console.log(product)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/'+id);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section id="prodetails" class="yt section-p1" >
          <div class="single-pro-image">
            <img src={product.image} alt={product.title} width="100%" id="mainImg" />
          </div>
   
        

          <div class="single-pro-details">
            <h6>{product.category}</h6>
            <h4>{product.title}</h4>
            <h2>&#8377;{product.price}</h2>
            
            <button class="option" onClick={addToCart}>Add To Cart</button>
            <h4>Product Details</h4>
            <span>{product.description}</span>
          </div>

    
        </section>
    // <div>
    //   <h2>{product.name}</h2>
    //   <img src={product.image} alt={product.name} />
    //   <p>${product.price}</p>
    //   {/* Add other details */}
    //   <button onClick={addToCart}>Add to Cart</button>
    // </div>
  );
};

export default ProductPreview;
