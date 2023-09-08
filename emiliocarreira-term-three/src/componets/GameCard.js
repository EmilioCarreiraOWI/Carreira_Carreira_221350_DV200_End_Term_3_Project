import React from "react";
import axios from "axios";
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
                <strong></strong>
                </MDBCardText>
                <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardText>
            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>
    )

}
export default GameCard;