import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Destination.css';
import GoogleMapReact from 'google-map-react';
import Map from '../../images/Map.png';
import { useParams } from 'react-router';

const Destination = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  console.log(watch("example"));


//   const {id}= useParams();
//     const product=fakeData.find(element=> element.key===id);



    return (
        <Container>
            <hr className="line"></hr>
        <Row className="destination-area">
            <Col md={3} className="search-area">
            <h6>Pick From</h6>
            <input type="text" placeholder="Mirpur 1"/>
            <h6>Drop To</h6>
            <input type="text" placeholder="Dhanmondi"/>
            <input id="submitBtn" type="submit" placeholder="Search" />
            </Col>
            <Col md={8}>
                <img src={Map}/>
            </Col>
        </Row>
        </Container>
    );
};

export default Destination;