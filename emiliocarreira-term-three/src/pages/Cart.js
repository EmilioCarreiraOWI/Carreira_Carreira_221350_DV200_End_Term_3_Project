import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';

function Cart() { 
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Fetch the movies array from localStorage when the component mounts
        const storedGames = JSON.parse(localStorage.getItem('games')) || [];
        setGames(storedGames);
    }, []);

    const calculateTotal = () => {
        // Calculate the total price of all movies
        return games.reduce((total, games) => total + games.price, 0);
    };

    const removeFromList = (index) => {
        // Remove the movie at the specified index from the list
        const updatedGames = [...games];
        updatedGames.splice(index, 1);
        setGames(updatedGames);

        // Update localStorage with the modified list
        localStorage.setItem('games', JSON.stringify(updatedGames));
    };

    return (
    <>
        <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>CART</h2>
                    </Col>
                </Row>
            </Container>

        <Container id='container2'>
        {games.length === 0 ? (
            <Row className='mt-3'>
                <Col lg={12}>
                    <p className='text-white'>No Games available in Cart.</p>
                </Col>
            </Row>
        ) : (
            <>
            
                {games.map((game, index) => (
                    <Row key={index} className='mt-5'>
                        <Col lg={2}>
                            <img className='card-img w-75 h-auto float-end' src={game.image} alt='...'></img>
                        </Col>
                        <Col lg={8}>
                            <h3 className='headings'>{game.name}</h3>
                            <p className='text-white'>Ganre: {game.ganre}</p>
                            <p className='text-white'>Date: {game.date}</p>
                            
                        </Col>
                        <Col lg={2}>
                            <h4 className='text-white'>Price: R{game.price}</h4>
                            <button className='btn btn-danger' onClick={() => removeFromList(index)}>
                                    Remove from List
                            </button>
                        </Col>
                    </Row>
                ))}
                <Row className='mt-3'>
                    <Col lg={10}></Col>
                    <Col lg={2}>
                        <h4 className='text-white'>Total: R{calculateTotal()}</h4>
                    </Col>
                </Row>
            </>
        )}
    </Container>
    </>
    );
}

export default Cart;