import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = ({ cart, setCart, fav, setFav }) => {
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
      <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with cupons & up to 70% off! </p>
            <button>Shop Now</button>
      </section>

      <section id="product1" className="section-p1">
            <h2>Home page</h2>
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

export default Home;
