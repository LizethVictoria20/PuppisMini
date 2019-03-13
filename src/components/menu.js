import React, { Component } from "react";
import styled from "styled-components";

const AMenu = styled.a`
  color: #b39cd0;
  font-family: "Indie Flower", cursive;
  font-size: 20px;
`;

class Menu extends Component {
  render() {
    return (
      <ul className="nav justify-content-center menu">
        <AMenu className="nav-link active" href="#">
          Home
        </AMenu>
        <AMenu className="nav-link" href="#">
          About
        </AMenu>
        <AMenu className="nav-link" href="#">
          Services
        </AMenu>
        <AMenu className="nav-link " href="#">
          Contact
        </AMenu>
      </ul>
    );
  }
}

export default Menu;
