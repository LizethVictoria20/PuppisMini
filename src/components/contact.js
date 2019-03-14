import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fefedf;
  margin-top: 50px;
`;
const Container2 = styled.div`
  text-align: center;
`;
const Title = styled.h2`
  text-align: center;
  padding: 30px;
`;
const Parrafo = styled.p`
  font-size: 30px;
`;
const Input = styled.input`
  width: 400px;
`;
const Texterea = styled.textarea`
  width: 400px;
`;
const Footer = styled.footer`
  background: black;
`;
class Contact extends Component {
  render() {
    return (
      <Container>
        <Title>CONTACT ME</Title>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <Input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <Texterea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
              </form>
            </div>
            <Container2 className="col-sm">
              <Parrafo>Available in</Parrafo>
              <div>
                <a
                  className="link"
                  href="https://www.instagram.com/puppiesmini/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-3x" />
                </a>
              </div>
            </Container2>
          </div>
        </div>
      </Container>
    );
  }
}
export default Contact;
