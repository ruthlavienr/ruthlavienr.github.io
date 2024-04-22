/*
Ruth Djusthine E. Tenifrancia
UV-3L

jsx file for cards component
*/

import React from "react";

class CardsList extends React.Component {

  //prints to console whenever "add to cart" button is clicked
  handleClick = (card) => {
    console.log(`Added ${card.name} to the cart`);
  };

  render() {
    //variable for cards list
    const { data } = this.props;
    return (
      <div className="cards-container">
        {data.map((card, index) => ( //html/jsx for card for each element in the list
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.url})` }}
          >
            <div className="btn">
              <button type="button" onClick={() => this.handleClick(card)}>
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
