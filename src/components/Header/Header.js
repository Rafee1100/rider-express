import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser]=useContext(UserContext);
    console.log(loggedInUser)
    return (
        <div className="header">
            <Container>
                    <Navbar expand="lg">

                        <Navbar.Brand className="title text-success" href="/home">Voyager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  className="d-flex justify-content-end  justify-content-md-end">
                            <Nav >
                                <Link className="px-md-4  py-md-2 mt-sm-3 mt-md-0 link-nav" to="/home" style={{textDecoration:'none'}}>Home</Link>
                                <Link className="px-md-4  py-md-2  link-nav" to="/destination" style={{textDecoration:'none'}}>Destination</Link>
                                <Link className="px-md-4  py-md-2  link-nav" to="/blog" style={{textDecoration:'none'}}>Blog</Link>
                                <Link className="px-md-4  py-md-2  link-nav" to="/contact" style={{textDecoration:'none'}}>Contact</Link>
                                <Link  className="px-md-4  py-md-2  link-nav" to="/login" style={{textDecoration:'none'}}>LogIn</Link>
                                <h5 className="mt-2" style={{color:'teal'}}>{loggedInUser.name}</h5>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </Container>
           
        </div>
    );
};

export default Header;