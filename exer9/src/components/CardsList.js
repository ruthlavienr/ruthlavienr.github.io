/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for cards component
*/

import React from "react";
import ShopCartList from "./ShopCartList";

class CardsList extends React.Component {

  render() {
    const { data, addToCart } = this.props;
    return (
      <div className="cards-container">
        {data.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.url})` }}
          >
            <div className="btn">
              <button type="button" onClick={() => addToCart(card)}>
                {card.btnName}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardsList;
