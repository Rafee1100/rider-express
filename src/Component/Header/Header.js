import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
           <Row className="navBar">
           <Col md={6}><h2>Cholo Jai</h2></Col>
           <Col md={6}>
                <ul>
                   <Link className="nav-items"  to="/home">Home</Link>
                   <Link className="nav-items"  to="/destination">Destination</Link>
                   <Link className="nav-items"  to="/blog">Blog</Link>
                   <Link className="nav-items"  to="/contact">Contact</Link>
                   <Link className="nav-items"  to="/login">Login</Link>
               </ul>
            </Col>
           </Row>
    );
};

export default Header;