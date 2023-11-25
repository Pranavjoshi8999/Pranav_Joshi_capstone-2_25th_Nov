import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  
  return (
    <nav>
      <section id="header">
            <Link to={"#"}><img src="img/aesthetic-removebg-preview (2).png" style={{paddingTop:0}} className="logo" alt="" /></Link>

            <div>
                <ul id="navbar">
                    <li><Link className="" to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/favorites">My Favorites</Link></li>
                    
                    {/* <li><a to="blog.html">Blog</a></li> */}
                    {/* <li><a to="about.html">About</a></li> */}
                    {/* <li><a to="contact.html">Contact</a></li> */}
                    <li><Link to="/cart" id="ig-bag"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></Link></li>
                     <Link to="#" id="close"><img src="img/x.svg" alt=""/></Link>
                </ul>
            </div>
            <div id="mobile">
                <Link to="/cart" style={{marginRight:'10px'}}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></Link>
                <i className="ri-menu-line icon-2 ip mg" id="bar"></i>
           
            </div>
        </section>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">My Favorites</Link></li>
        <li><Link to="/cart">My Cart</Link></li>
      </ul> */}
    </nav>
  );
};

export default Navigation;
