import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
  render() {
    const { menuName, menuItems } = this.props;

    const elements = menuItems.map((element) => (
      <MenuItem key={element.itemId} {...element} />
    ));

    return (
      <div>
        <h1>{menuName} Menu</h1>
        {elements}
      </div>
    );
  }
}
