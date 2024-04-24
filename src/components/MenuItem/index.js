import React from "react";

export default class MenuItem extends React.Component {
  render() {
    const { itemId, itemPrice, itemName, itemDescription } = this.props;

    return (
      <div className="menu-item" id={itemId} key={itemId}>
        <span>${itemPrice}</span>
        <h2>{itemName}</h2>
        <p>{itemDescription}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}
