import React, { Component } from "react";
import styled from "styled-components";

const ImagenFront = styled.img`
  border-radius: 50%;
  width: 20%;
  object-fit: cover;
  float: right;
`;
const Title = styled.h1`
  font-size: 50px;
`;

class Home extends Component {
  render() {
    return (
      <div className="name d-sm-flex justify-content-center align-items-center flex-column iam-side">
        <ImagenFront src={this.props.front.url} alt={this.props.front.alt} />
        <Title>PUPPIS MINI</Title>
        <h3>Cachorros Miniatura</h3>
      </div>
    );
  }
}

export default Home;
