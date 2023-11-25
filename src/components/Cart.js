import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ cart,setCart }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleBuyClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemove = (index) => {
    console.log(index);
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    alert("Product removed!!")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data or simulate successful order
    alert('Your order was successful!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    });
    setShowForm(false);
  };

  return (
    <div>
      
      <section id="cart" class="section-p1">
      <h2>Cart</h2>
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => (
                    
                        <tr key={index}>
                          <td onClick={() => handleRemove(index)}><Link href="#"></Link><i ><img src="img/check-circle-fill.svg" alt="" /></i></td>
                          <td ><img class="size" src={item.image} alt={item.name} /></td>
                          <td><Link to={`/product/${item.id}`}>{item.title}</Link></td>
                          <td>&#8377;{item.price}</td>
                      </tr>
                    
                  ))}
                </tbody>
            </table>
        </section>
      
      {cart.length !== 0 && <section id="cart-add" class="section-p1">
           
            <div id="subtotal" style={{marginLeft:'-20px',marginRight:'20px'}}>
                <h3>Cart Totals</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>&#8377; {cart.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>&#8377; {cart.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)}</strong></td>
                    </tr>
                </table>
                <button class="option" onClick={handleBuyClick}>Proceed To checkout</button>
            </div>

            {showForm && (<div id="coupon" >
                <h3>Place your order</h3>
                <div>
                <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit" class="option">Submit Order</button>
        </form>
                    {/* <button class="option">Apply</button> */}
                </div>
            </div>)}
        </section>}

      
        
      
    </div>
  );
};

export default Cart;
