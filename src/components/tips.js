import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fefedf;
  padding: 5%;
`;
const Image = styled.img`
  width: 70%;
  border-radius: 50%;
`;
const Title = styled.h2`
  font-size: 50px;
`;
const Parrafo = styled.p`
  font-size: 20px;
`;

class Tips extends Component {
  render() {
    return (
      <Container className="container">
        <div className="row">
          <div className="col-sm" className="tips">
            <Title>Tips for your pet</Title>
            <Image src={this.props.tips.url} alt={this.props.tips.alt} />
          </div>
          <div className="col-sm">
            <Parrafo>
              <ul>
                <li>
                  🐾 No sacar al cachorro hasta que terminé el plan de
                  vacunación
                </li>
                <li>
                  🐾 No llevar al cachorro a centros veterinarios, puesto que no
                  tienen todas las vacunas y estos lugares estan llenos de virus
                  (Se recomienda pedir veterinario a domicilio).
                </li>
                <li>
                  🐾 Desparasitarlos cada 15 días hasta los 6 meses, luego cada
                  3 meses de por vida.
                </li>
                <li>
                  {" "}
                  🐾 Comprarle juguetes, rasca encías y peluches (Para que el
                  cachorro sepa desde pequeño que puede morder).
                </li>
                <li> 🐾 Mantenerle siempre agua fresca.</li>
                <li>🐾Bañarlo 2 veces al mes después de 4 meses y medio</li>
                <li>
                  {" "}
                  🐾 Tener la mascota en un cuarto mientras cumple el plan de
                  vacunación, este cuarto debe ser trapeado con cloro.
                </li>
              </ul>
            </Parrafo>
          </div>
        </div>
      </Container>
    );
  }
}

export default Tips;
