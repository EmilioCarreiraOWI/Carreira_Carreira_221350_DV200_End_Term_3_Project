import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function FormUpdate() {

    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Date, setDate] = useState();
    const [Image, setImage] = useState();
    const [Ganre, setGanre] = useState();
    const [Info, setInfo] = useState();
    
    
    const {id}=useParams()

    const [game, setGame] = useState([]);
    
    

    const style = {
        margin: "10px",
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/games/'+id)
            .then((res) => {
                setGame(res.data);
                
            })
            .catch()
    })

    const update=(e)=>{
        e.preventDefault()
        let payload = { name: Name, price: Price, date: Date, ganre: Ganre, image: Image, info: Info }
        axios.patch('http://localhost:5000/api/games/'+id, payload)
        .then(res=>{
            console.log('userEditSuccessfully');
            
        })
    }

    return (

        
            
                
        <>
        <Container id='topheading1'>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>UPDATE GAME: {game.name}</h2>
            </Col>
          </Row>
        </Container>

            <form onSubmit={update}>
                <Container id='container2'>
                    <MDBCard id="testbox2" className="mb-4 mt-4" >
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                        <MDBCardImage src={game.image} alt={game.image} fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardText>
                            <strong className="headings">Game Name: </strong><br />
                            <input className='form-input2'
                                type="text"
                                placeholder= {game.name}
                                onChange={(e => setName(e.target.value))}
                            />
                            <br />
                            <strong className="headings">Information: </strong><br />
                            <input className='form-input2'
                                type="text"
                                placeholder={game.info}
                                onChange={(e => setInfo(e.target.value))}
                            />
                            <br />
                            
                            <strong className="headings">Game Price: </strong><br />
                            <input className='form-input2'
                                type="number"
                                placeholder={game.price}
                                onChange={(e => setPrice(e.target.value))}
                            />
                            <br />

                            <strong className="headings">Releast Date: </strong><br />
                            <input className='form-input2'
                                type="number"
                                placeholder={game.date}
                                onChange={(e => setDate(e.target.value))}
                            />
                            <br />


                            <strong className="headings">Game Ganre: </strong><br />
                            <input className='form-input2'
                                type="text"
                                placeholder={game.ganre}
                                onChange={(e => setGanre(e.target.value))}
                            />
                            <br />


                            <strong className="headings">Game Image URL: </strong><br />
                            <input className='form-input2'
                                type="text"
                                placeholder={game.image}
                                onChange={(e => setImage(e.target.value))}
                            />
                            <br />

                            </MDBCardText>
                            
                            <MDBCol>
                                <button >Delete Game</button>
                                <button className='mx-2' onClick={e=>update(e)}>Update Game</button>
                            </MDBCol> 
                            
                        </MDBCardBody>
                        </MDBCol>
                        
                    </MDBRow>
                </MDBCard>
                </Container>
            </form>
        </>    
          
        
    
    );
}

export default FormUpdate;