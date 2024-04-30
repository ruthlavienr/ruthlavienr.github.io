/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for shopping cart component
*/

import React from "react";

class ShopCartList extends React.Component {

  render() {

    const { data, shopCartTotal, deleteToCart} = this.props;

    return (
        <div className="shop-cart-wrapper">
          <div className="shop-cart-container">
            Shopping cart (Total:{shopCartTotal}) 
            <br />
            <br />
            {data.map((card, index) => (
              <div className="cart" key={index}> 
                <div className="cart-content">
                  <span className="cart-name">{card.name}</span>
                  <div className="cart-info">
                    <span>{card.qty}</span>
                    <button className="exBtn" onClick={() => deleteToCart(card)}>X</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default ShopCartList;
