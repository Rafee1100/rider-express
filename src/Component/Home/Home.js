import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Bus from '../../images/Frame-1.png'
import Car from '../../images/Frame-2.png'
import Bike from '../../images/Frame.png'
import Train from '../../images/Group.png'
import Cart from '../Cart/Cart';


const Home = () => {
    const fakeData=[{
        id:1,
        title:'BIKE',
        photo: Bike
    },
    {   id:2,
        title:'CAR',
        photo: Car
    },
    {
        id:3,
        title:'BUS',
        photo: Bus
    },
    {
        id:4,
        title:'TRAIN',
        photo: Train
    }
]
    return (
        <Container className="homepage">
            <div className='card-area'>
            {
                fakeData.map(element => <Cart element={element}></Cart>)
            }
            </div>
        </Container>
    );
};

export default Home;