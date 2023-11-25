import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductOrder = ({ cart, setCart, fav, setFav }) => {
  const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // Update the cart by adding the selected product
  };

  const addToFav = (product) => {
    setFav([...fav, product]); // Update the cart by adding the selected product
  };



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
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
    <div>

      <section id="product1" className="section-p1">
            <h2>Products</h2>
            <p>Summer Collection New Morden Design</p>
            <div className="pro-container">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Product key={product.id} product={product} onAddToCart={addToCart} onAddToFav={addToFav}/>
                </Link>
              ))}
            </div>
      </section>

      
    </div>
  );
};

export default ProductOrder;
