import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Container } from 'react-bootstrap';
//import './about.css'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h2>About</h2>
                            <p>D Rose</p>
                        </Jumbotron>
                        <Link to='/about'>
                            <Button bsStyle='primary'>About</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} classname="person-wrapper">
                        <Image src="" circle className="profile-pic" />
                        <h3>Doug</h3>
                        <p>blah</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}