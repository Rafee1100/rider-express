import React, { useEffect, useState } from 'react';
import './Home.css';
import data from '../../fakedata/fakedata.json'
import Vehicle from '../Vehicle/Vehicle';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const [vechicleType, setVehicleType] = useState([]);
    useEffect(() => {
        setVehicleType(data);
    }, [])
    return (
        <div >
            <div className="background">
                <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    {
                        vechicleType.map(type => <Vehicle vehicleType={type}></Vehicle>)
                    }
                </Row>
                </Container>
               
                {

                }
            </div>
        </div>
    );
};

export default Home;