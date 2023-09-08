import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom';
import ClientGameList from '../componets/ClientCardLIst';


  

function More() {

const navigate = useNavigate();

const navigateToIndevidual = () => {
    // 👇️ navigate to /contacts
    navigate('/Indevidual.js');
};




    return (
      <>
        <Container id='topheading1'>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>MORE GAMES</h2>
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
                        For this More page you will find all the games this website has to offer. Each Colum contains a image and a name, the colum react as a botton and the user will be able click on the culum. the button will navigate the user to the Indevidual Page. Feel free to select the indevidual games and enjoy your time interactiong with the game. 
                    </p>
                </Col>
            </Row>
        </Container>

        <Container id='container2'>
            <ClientGameList />
        </Container>

      </>
    );
  }
  
  export default More;