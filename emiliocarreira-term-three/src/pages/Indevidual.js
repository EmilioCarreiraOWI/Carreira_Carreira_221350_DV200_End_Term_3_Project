import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom';

function Indevidual() {

    const navigate = useNavigate();

    const navigateToCart = () => {
      // 👇️ navigate to /Cart
      navigate('/Cart.js');
    };

    return (
        <>
        
            <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>INDEVIDUAL PAGE</h2>
                    </Col>
                </Row>
            </Container>

            <Container id='container2'>
                <Row className='mt-4'>
                    <Col lg={3} id='Indevidual'>
                        <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/61/bf/73/61bf735782a9298796178aa7d3e8249b.jpg'></img>
                    </Col>
                    <Col lg={8} className='text-white' id='Indevidual'>
                        <h3>Game Name</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className='btn btn-success' onClick={navigateToCart}>Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }

    export default Indevidual;