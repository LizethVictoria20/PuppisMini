import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Menu from "./components/menu";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Tips from "./components/tips";
import Photos from "./components/photos";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Container from "./components/container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activo: "home"
    };
  }
  changeState = nuevoActivo => {
    this.setState({ activo: nuevoActivo });
  };
  render() {
    let Content = null;
    if (this.state.activo === "home") {
      Content = <Home />;
    } else if (this.state.activo === "about-me") {
      Content = <AboutMe />;
    } else if (this.state.activo === "tips") {
      Content = <Tips />;
    } else if (this.state.photos === "photos") {
      Content = <Photos />;
    } else {
      Content = <Contact />;
    }
    return (
      <div>
        <Menu menu={this.changeState} />
        {Content}
      </div>
    );
  }
}

export default App;
