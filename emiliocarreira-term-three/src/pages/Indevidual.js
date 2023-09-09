import React, { useState, useEffect } from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function Indevidual() {

  const [selectedGameId, setSelectedGameId] = useState('');

  useEffect(() => {
    // Retrieve the selected game ID from sessionStorage
    const gameId = sessionStorage.getItem('selectedGameId');
    setSelectedGameId(gameId);
  }, []);
    

    return (
        <>
        
            <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>INDEVIDUAL PAGE: {selectedGameId}</h2>
                    </Col>
                </Row>
            </Container>

            <Container id='container2'>
                <Row className='mt-4'>
                    <Col lg={3} id='Indevidual'>
                        <img className='card-img w-100 h-auto' src={selectedGameId.Image} alt='...'></img>
                    </Col>
                    <Col lg={8} className='text-white' id='Indevidual'>
                        <h3>{selectedGameId.Name}</h3>
                        <strong className="headings">Info:</strong> <p>{selectedGameId.Info}</p>
                        <strong className="headings">Price:</strong> <p>{selectedGameId.Price}</p>
                        <strong className="headings">Ganre:</strong> <p>{selectedGameId.Ganre}</p>
                        <strong className="headings">Date:</strong> <p>{selectedGameId.Date}</p>
                        <button className='btn btn-success'>Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }

    export default Indevidual;