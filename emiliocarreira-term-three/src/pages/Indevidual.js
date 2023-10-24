import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useLocation } from "react-router-dom";
import axios from 'axios';

function Indevidual() {
    const location = useLocation();
    const gameId = new URLSearchParams(location.search).get("gameId");

    const [selectedGameId, setSelectedGameId] = useState({});
    const [readyCart, setReadyCart] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/api/games/${gameId}`)
            .then((response) => {
                console.log(response.data);
                setSelectedGameId(response.data);
                setReadyCart((prevReadyCart) => {
                    const newReadyCart = {
                        'name': response.data.name,
                        'price': response.data.price,
                        'ganre': response.data.ganre,
                        'date': response.data.date
                    };
                    console.log(newReadyCart);
                    return newReadyCart;
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [gameId]);

    useEffect(() => {
        console.log(readyCart);
    }, [readyCart]);

    const addToCart = () => {
       
            // Check if "movies" array exists in local storage
            const moviesInLocalStorage = JSON.parse(localStorage.getItem('movies')) || [];
    
            // Check if the movie is already in the cart
            const isMovieInCart = moviesInLocalStorage.some(movie => movie.name === readyCart.name);
    
            if (isMovieInCart) {
                alert('This movie is already in the cart.');
            } else {
                // Add the new movie to the array
                const updatedMovies = [...moviesInLocalStorage, readyCart];
    
                // Write the updated array back to local storage
                localStorage.setItem('movies', JSON.stringify(updatedMovies));
    
                alert('Movie added to the cart.');
            }
        }
    

    return (
        <>
            <Container id='topheading1'>
                <Row className='mt-3 mb-3'>
                    <Col lg={12} className='justify-content-center'>
                        <h2>INDEVIDUAL PAGE: {selectedGameId.name}</h2>
                    </Col>
                </Row>
            </Container>

            <Container id='container2'>
                <Row className='mt-4'>
                    <Col lg={3} id='Indevidual'>
                        <img className='card-img w-100 h-auto' src={selectedGameId.image} alt='...'></img>
                    </Col>
                    <Col lg={8} className='text-white' id='Indevidual'>
                        <h3>{selectedGameId.name}</h3>
                        <strong className="headings">Info:</strong> <p>{selectedGameId.info}</p>
                        <strong className="headings">Price:</strong> <p>{selectedGameId.price}</p>
                        <strong className="headings">Ganre:</strong> <p>{selectedGameId.ganre}</p>
                        <strong className="headings">Date:</strong> <p>{selectedGameId.date}</p>
                        <button className='btn btn-success' onClick={addToCart}>Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Indevidual;
