import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const navigateToCart = () => {
      // 👇️ navigate to /Cart
      navigate('/pages/Cart.js');
    };

    return (
        
        <>
            <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>LOGIN PAGE</h2>
                    </Col>
                </Row>
            </Container>

            <Container id='container2' className='normal-text justify-content-center'>
                <form className='justify-content-center'>
                    <Row>
                        <Col md={12}>
                            <lable>Username:</lable>
                        </Col>
                        <Col md={12}>
                            <input placeholder='Enter here'></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <lable>Password:</lable>
                        </Col>
                        <Col md={12}>
                            <input placeholder='Enter here'></input>
                        </Col>
                    </Row>
                    
                    
                </form>
            </Container>
            
            
        </>
    )
    }

    export default Login;