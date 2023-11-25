import React from 'react';
import { Link } from 'react-router-dom';


const Favourites = ({ fav, setFav }) => {
 
  const handleRemove = (index) => {
    console.log(index);
    const updatedCart = [...fav];
    updatedCart.splice(index, 1);
    setFav(updatedCart);
    alert("Product removed!!")
  };

  return (
    <div>
      
      <section id="cart" class="section-p1">
      <h2>Favourites</h2>
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        {/* <td>Price</td> */}
                    </tr>
                </thead>
                <tbody>
                {fav.map((item, index) => (
                    
                        <tr key={index}>
                          <td onClick={() => handleRemove(index)}><Link href="#"></Link><i><img src="img/check-circle-fill.svg" alt="" /></i></td>
                          <td ><img class="size" src={item.image} alt={item.name} /></td>
                          <td><Link to={`/product/${item.id}`}>{item.title}</Link></td>
                          {/* <td>&#8377;{item.price}</td> */}
                      </tr>
                    
                  ))}
                </tbody>
            </table>
        </section>

      
        
      
    </div>
  );
};

export default Favourites;
