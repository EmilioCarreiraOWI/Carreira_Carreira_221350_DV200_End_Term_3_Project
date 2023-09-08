import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const GameCard = ({ game }) => {

    console.log(game);
    const handleDelete = (gameID) => {
        console.log(gameID);
        axios.delete('http://localhost/api/games/'+gameID);
    };

    return (
        <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
            <MDBCol md='4'>
            <MDBCardImage src={game.image} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
            <MDBCardBody>
                <MDBCardTitle>{game.name}</MDBCardTitle>
                <MDBCardText>
                <strong>Information: </strong><br /><p>{game.info}</p><br />
                <strong>Releast Date: </strong><br /><p>{game.date}</p><br />
                <strong>Game Ganre: </strong><br /><p>{game.ganre}</p><br />
                <strong>Game Price: </strong><br /><p>{game.price}</p><br />
                </MDBCardText>
                <MDBCardText>
                <Button varient="danger" onClick={() => handleDelete(game._id)}>Delete</Button>
                </MDBCardText>
            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>
    )

}
export default GameCard;