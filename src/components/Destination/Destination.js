import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';
import './Destination.css'

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col md={4} sm={12} className="p-2">
                    <div className="desitination-place p d-flex align-items-center flex-column justify-content-center">
                        <label className="place-label" htmlFor="place-form">Pick From</label><br/>
                        <input ctype="text" name="place-from" /><br/>
                        <label className="place-label"  htmlFor="place-to">Pick To</label><br/>
                        <input type="text" name="place-to" /><br />
                        <button className="btn btn-lg btn-success">Search</button><br/>
                    </div>
                </Col>

                <Col md={8} sm={12}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;