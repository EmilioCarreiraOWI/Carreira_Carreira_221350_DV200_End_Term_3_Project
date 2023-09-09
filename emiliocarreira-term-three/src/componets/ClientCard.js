import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";


const ClientCard = ({ game }) => {


    return (
        <Col id='testbox' lg={2} className='normal-text justify-content-center btn mx-3 mt-4' to={`/Indevidual/${game._id}`}>
            <img className='card-img w-100 h-auto' src={game.image} alt={game.image}></img>
            <Link to={`/Indevidual/${game._id}`} className="btn btn-secondary text-center mt-2 w-100 btn-outline-light">{game.name}</Link>
        </Col>
        
    )

}
export default ClientCard;