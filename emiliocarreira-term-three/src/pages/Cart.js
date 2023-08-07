import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Cart() {
    return (
        <>
            <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>MY CART</h2>
                    </Col>
                </Row>
            </Container>

            <Container id='container2'>
                <Row className='mt-4'>
                    <Col lg={2}>
                        <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/61/bf/73/61bf735782a9298796178aa7d3e8249b.jpg'></img>
                    </Col>
                    <Col lg={8} >
                        <h3 className='headings'>Forza Horizon</h3>
                        <p className='normal-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={2}>
                        <button className='btn btn-danger'>Delete</button>
                        <button className='btn btn-success'>Buy</button>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col lg={2}>
                        <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/4c/94/b3/4c94b322b88866b428054484d84d1899.jpg'></img>
                    </Col>
                    <Col lg={8} className='text-white headings'>
                        <h3 className='headings'>Call of Duty: Black Ops 3</h3>
                        <p className='normal-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={2}>
                        <button className='btn btn-danger'>Delete</button>
                        <button className='btn btn-success'>Buy</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;