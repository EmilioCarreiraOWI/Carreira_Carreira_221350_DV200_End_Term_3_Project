import React, { useState, useEffect } from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Indevidual() {

    
    
    const [info, setInfo] = useState('');
    const selectedID = localStorage.getItem('selectedID'); // Retrieve the selected ID from local storage
  
    useEffect(() => {
      // Assuming you have an API endpoint to fetch information based on the selected ID
      // Replace 'fetchInfo' with your actual data-fetching logic
      async function fetchInfo() {
        try {
          const response = await fetch('http://localhost:5000/api/games/'+{selectedID});
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setInfo(data); // Update the state with the fetched information
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      if (selectedID) {
        fetchInfo();
      }
    }, [selectedID]);
    

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
                        <img className='card-img w-100 h-auto' src={info.Image} alt='...'></img>
                    </Col>
                    <Col lg={8} className='text-white' id='Indevidual'>
                        <h3>{info.Name}</h3>
                        <strong className="headings">Info:</strong> <p>{info.Info}</p>
                        <strong className="headings">Price:</strong> <p>{info.Price}</p>
                        <strong className="headings">Ganre:</strong> <p>{info.Ganre}</p>
                        <strong className="headings">Date:</strong> <p>{info.Date}</p>
                        <button className='btn btn-success'>Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }

    export default Indevidual;