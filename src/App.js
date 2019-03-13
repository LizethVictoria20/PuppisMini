import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Menu from "./components/menu";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div>
        <Menu
          avatar={{
            url:
              "https://instagram.feoh4-2.fna.fbcdn.net/vp/4d3f0800aa5095950d6b7f5845840d50/5D191DE5/t51.2885-15/e35/45643783_734780323575509_3152925887313704723_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net",
            alt: "Avatar"
          }}
        />
        <Home
          front={{
            url:
              "https://instagram.feoh4-2.fna.fbcdn.net/vp/4d3f0800aa5095950d6b7f5845840d50/5D191DE5/t51.2885-15/e35/45643783_734780323575509_3152925887313704723_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net",
            alt: "front"
          }}
        />
      </div>
    );
  }
}

export default App;
