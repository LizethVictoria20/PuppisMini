import React, { Component } from "react";
import styled from "styled-components";

const ImagenFront = styled.img`
  border-radius: 60%;
  width: 30%;
  object-fit: cover;
  float: right;
`;

class Home extends Component {
  render() {
    return (
      <div className="name d-sm-flex justify-content-center align-items-center flex-column iam-side">
        <figure
          className='d-sm-flex justify-content-center align-items-center flex-column iam-side">
          <section class="navbar-'
        >
          <ImagenFront src={this.props.front.url} alt={this.props.front.alt} />
        </figure>
        <h1 className="text-center">PUPPIS MINI</h1>
        <h3>Cachorros Miniatura</h3>
      </div>
    );
  }
}

export default Home;
