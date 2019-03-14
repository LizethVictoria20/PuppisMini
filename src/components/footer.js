import React, { Component } from "react";
import styled from "styled-components";

const Fondo = styled.div`
  background: #b39cd0;
  padding: 20px;
`;

class Footer extends Component {
  render() {
    return (
      <Fondo>
        Copyright © 2018 Puppies Mini, All Rights Reserved. This product is
        protected by copyright and distributed under licenses restricting
        copying, distribution, and decompilation.
      </Fondo>
    );
  }
}
export default Footer;
