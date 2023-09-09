import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";



const ClientCard = ({ game }) => {

    const handleSelectGame = (gameId) => {
        // Save the selected game ID to sessionStorage
        sessionStorage.setItem('selectedGameId', gameId);
      };


    return (
        <Col md={2} id="testbox" className="btn m-3">
                <img
                    className='card-img w-100 h-auto'
                    src={game.image}
                    alt={game.image}
                ></img>
                <Link
                    to='/Indevidual' // Navigate to the other page where you want to display the selected game ID
                    className="btn btn-secondary text-center mt-2 w-100 btn-outline-light"
                    onClick={() => handleSelectGame(game.id)}
                >
                    {game.name}
                </Link>
        </Col>
        
        
    )

}
export default ClientCard;