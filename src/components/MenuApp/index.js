import React from "react";
import Menu from "../Menu";

class MenuApp extends React.Component {
  render() {
    const { data } = this.props;
    const menus = data.map((menuData) => (
      <Menu key={menuData.menuName} {...menuData} />
    ));

    return <>{menus}</>;
  }
}

export default MenuApp;
