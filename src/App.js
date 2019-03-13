import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Menu from "./components/menu";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Home
          front={{
            url:
              "https://i.pinimg.com/236x/44/d4/47/44d447462ee2ba7980bf8d8b484a8336.jpg",
            alt: "front"
          }}
        />
        <AboutMe
          about={{
            url:
              "https://imagenesparapeques.com/wp-content/uploads/2017/08/imagenes-simones-perritas-fotos.jpg",
            alt: "Image About"
          }}
        />
      </div>
    );
  }
}

export default App;
