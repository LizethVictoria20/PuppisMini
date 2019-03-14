import React, { Component } from "react";
import styled from "styled-components";

const AMenu = styled.a`
  color: #b39cd0;
  font-family: "Indie Flower", cursive;
  font-size: 30px;
`;

class Menu extends Component {
  render() {
    return (
      <ul className="nav justify-content-center menu">
        <AMenu
          className="nav-link active"
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.menu("home");
          }}
        >
          Home
        </AMenu>
        <AMenu
          className="nav-link"
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.menu("about-me");
          }}
        >
          About
        </AMenu>
        <AMenu
          className="nav-link"
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.menu("tips");
          }}
        >
          Tips
        </AMenu>
        <AMenu
          className="nav-link "
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.menu("photos");
          }}
        >
          Photos
        </AMenu>
        <AMenu
          className="nav-link "
          href="#"
          onClick={event => {
            event.preventDefault();
            this.props.menu("contact");
          }}
        >
          Contact
        </AMenu>
      </ul>
    );
  }
}

export default Menu;
