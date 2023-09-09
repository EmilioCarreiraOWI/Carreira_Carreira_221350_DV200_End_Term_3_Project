import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const GameCard = ({ game }) => {

    
    console.log(game);
    const handleDelete = (game) => {
        console.log(game);
        axios.delete('http://localhost/api/games/'+game);
    };

    // const handleDelete = async (id) => {
    //     try {
    //       await axios.delete(`your-api-url/${id}`); // Replace with your API endpoint and the resource ID to delete
    //       setDeletedItemId(id); // Store the deleted item's ID for UI updates
    //       fetchData(); // Refetch the data to update the UI with the deleted item removed
    //     } catch (error) {
    //       console.error('Error deleting item:', error);

    return (
        <Col md={4}>
            <MDBCard id="testbox2" className="mb-4 mx-" >
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src={game.image} alt={game.image} fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle><h2 className="headings">{game.name}</h2></MDBCardTitle>
                        <MDBCardText>
                        <strong className="headings">Information: </strong><br /><p className="normal-text">{game.info}</p><br />
                        <strong className="headings">Releast Date: </strong><br /><p className="normal-text">{game.date}</p><br />
                        <strong className="headings">Game Ganre: </strong><br /><p className="normal-text">{game.ganre}</p><br />
                        <strong className="headings">Game Price: </strong><br /><p className="normal-text">{game.price}</p><br />
                        </MDBCardText>
                        <MDBCardText >
                        <Button className="mx-2 btn-danger" onClick={() => handleDelete(game._id)}>Delete</Button>
                        <Link to={`/update/${game._id}`} className="btn btn-success me-2">Update</Link>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </Col>
        
    )

}
export default GameCard;