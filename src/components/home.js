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
      <div className="name">
        <figure>
          <ImagenFront src={this.props.front.url} alt={this.props.front.alt} />
        </figure>
        <h1>PUPPIS MINI</h1>
        <h3>Cachorros Miniatura</h3>
      </div>
    );
  }
}

export default Home;
