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
            <Row className='mt-3 mb-3'>
                <Col lg={12} className='justify-content-center'>
                    <h2 className='headings'>PAGE INFORMATION: </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='normal-text'>
                        Selected games you want to buy. The green button is for purcessing the game, it will automatecly be added to your Library page. The grey button is for removing the item from the cart if you dont want the game anymore
                    </p>
                </Col>
            </Row>
        </Container>

            <Container id='container2'>
                <Row className='mt-4'>
                    <Col lg={2}>
                        <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/61/bf/73/61bf735782a9298796178aa7d3e8249b.jpg'></img>
                    </Col>
                    <Col lg={7} >
                        <h3 className='headings'>Forza Horizon 5</h3>
                        <p className='normal-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={2}>
                    <Row className='text-light headings'>
                            <h3>R799.00</h3>
                        </Row>
                        <Row className='mt-2'>
                            <button className='btn btn-success '>Purchase</button>
                        </Row>
                        <Row className='mt-2'>
                            <button className='btn btn-secondary'><img width="20" height="20" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-dustbin-office-supplies-vectorslab-glyph-vectorslab.png" alt="external-dustbin-office-supplies-vectorslab-glyph-vectorslab"/></button>
                        </Row>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col lg={2}>
                        <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/4c/94/b3/4c94b322b88866b428054484d84d1899.jpg'></img>
                    </Col>
                    <Col lg={7} className='text-white headings'>
                        <h3 className='headings'>Call of Duty: Black Ops 3</h3>
                        <p className='normal-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col lg={2}>
                        <Row className='text-light headings'>
                            <h3>R999.00</h3>
                        </Row>
                        <Row className='mt-2'>
                            <button className='btn btn-success '>Purchase</button>
                        </Row>
                        <Row className='mt-2'>
                            <button className='btn btn-secondary'><img width="20" height="20" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-dustbin-office-supplies-vectorslab-glyph-vectorslab.png" alt="external-dustbin-office-supplies-vectorslab-glyph-vectorslab"/></button>
                        </Row>
                        
                        
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;