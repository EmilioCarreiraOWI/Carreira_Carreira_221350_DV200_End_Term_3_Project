import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";


const ClientCard = ({ game }) => {


    return (
        <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
            <img className='card-img w-100 h-auto' src={game.image} alt={game.image}></img>
            <p className='text-center mt-2'>{game.name}</p>
        </Col>
        
    )

}
export default ClientCard;