// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductPreview from './components/ProductPreview';
// Import other components as needed

import '../src/App.css'
import ProductOrder from './components/ProductOrder';
import Favourites from './components/Favourites';

const App = () => {
  const [cart, setCart] = useState([]); // Define the cart state
  const [fav, setFav] = useState([]);
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} fav={fav} setFav={setFav}/>} />
          <Route path="/shop" element={<ProductOrder cart={cart} setCart={setCart} fav={fav} setFav={setFav}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="/favorites" element={<Favourites fav={fav} setFav={setFav}/>} />
          <Route path="/product/:id" element={<ProductPreview cart={cart} setCart={setCart}/>} />
          {/* Other routes if needed */}
        </Routes>
        <footer class="section-p1">
            <div class="col">
                <img class="logo" src="img/aesthetic-removebg-preview (2).png" alt=""/>
                <h4>Contact</h4>
                <p><strong>Address:</strong>Pune,Maharastra,India</p>
                <p><strong>Phone:</strong>9171712090/</p>
                <p><strong>Hours:</strong>10:00,Mon-Sat</p>
                <div class="follow">
                    <h4>Follow us</h4>
                    <div class="icon">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Aobut</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Police</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Contact us</a>
            </div>
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div class="install">
                <h4>Install App</h4>
                <p>From App store or Google Play</p>
                <div class="row">
                <img class="payimg" src="img/pay/app.jpg" alt=""/>
                <img class="payimg" src="img/pay/play.jpg" alt=""/>
            </div>
            </div>
            <div>
            <p>Secuerd payment Gateway</p>
            <img src="img/pay/pay.png" alt=""/>
            </div>
           
            <div class="copyright">
                <p> &copy; 2023 Aesthetic </p>
            </div>
        </footer>
      </div>
    </Router>
  );
};


export default App;

