import React, { Component, Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (

        <Container>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Navbar.Brand href='about'>About</Navbar.Brand>
            <Navbar.Brand href='portfolio'>Portfolio</Navbar.Brand>
            <Navbar.Brand href='resume'>Resume</Navbar.Brand>
            <Navbar.Brand href='contact'>Contact</Navbar.Brand>
        </Navbar>
        </Container>

    );
  }
}
