import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 80%;
  height: 70%;
`;
const TitleAbout = styled.h2`
  text-align: center;
  font-size: 35px;
  font-family: "Indie Flower", cursive;
`;
const ParrafoAbout = styled.p`
  font-family: "Indie Flower", cursive;
  font-size: 20px;
`;

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <TitleAbout>About Me</TitleAbout>
            <ParrafoAbout>
              Puppies mini es una página de venta de cachorritos miniatura y
              entrenamiento. Hacemos envios nacionales e internacionales.
              Criadero en donde sus madres son tratadas con amor ❤
            </ParrafoAbout>
          </div>
          <div className="col-sm">
            <Image src={this.props.about.url} alt={this.props.about.alt} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
