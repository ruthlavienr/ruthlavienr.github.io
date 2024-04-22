import React from "react";

class CardsList extends React.Component {
  handleClick = (card) => {
    console.log(`Added ${card.name} to the cart`);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="cards-container">
        {data.map((card, index) => (
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
