import React, { useState, useEffect } from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Indevidual() {

  const {id}=useParams()

  const [game, setGame] = useState([]);
  

  useEffect(() => {
      axios.get('http://localhost:5000/api/games/'+id)
          .then((res) => {
              setGame(res.data);
              
          })
          .catch()
  })
    

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
                        <img className='card-img w-100 h-auto' src={game.Image} alt='...'></img>
                    </Col>
                    <Col lg={8} className='text-white' id='Indevidual'>
                        <h3>{game.Name}</h3>
                        <strong className="headings">Info:</strong> <p>{game.Info}</p>
                        <strong className="headings">Price:</strong> <p>{game.Price}</p>
                        <strong className="headings">Ganre:</strong> <p>{game.Ganre}</p>
                        <strong className="headings">Date:</strong> <p>{game.Date}</p>
                        <button className='btn btn-success'>Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
    }

    export default Indevidual;