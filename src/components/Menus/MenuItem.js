import React from "react";
import { Link } from "react-router-dom";
import { randomRgbaColor } from "../../utils/index";

function MenuItem(props) {
  const { to, name, Icon } = props;
  return (
    <Link
      to={to}
      offset={-70}
      duration={500}
      className="subMenu"
    >
      <Icon className="icon" style={{color: randomRgbaColor(1)}}/>
      <span> {name} </span>
    </Link>
  );
}

export default MenuItem;
