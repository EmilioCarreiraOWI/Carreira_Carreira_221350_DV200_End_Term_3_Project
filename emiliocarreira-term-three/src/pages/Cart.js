import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';

function Cart() { 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch the movies array from localStorage when the component mounts
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        setMovies(storedMovies);
    }, []);

    const calculateTotal = () => {
        // Calculate the total price of all movies
        return movies.reduce((total, movie) => total + movie.price, 0);
    };

    const removeFromList = (index) => {
        // Remove the movie at the specified index from the list
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);

        // Update localStorage with the modified list
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
    };

    return (
        <Container>
        <Row className='mt-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>Movie List</h2>
            </Col>
        </Row>
        {movies.length === 0 ? (
            <Row className='mt-3'>
                <Col lg={12}>
                    <p>No movies available.</p>
                </Col>
            </Row>
        ) : (
            <>
                {movies.map((movie, index) => (
                    <Row key={index} className='mt-3'>
                        <Col lg={3}>
                            <img className='movie-img w-100 h-auto' src={movie.image} alt='...'></img>
                        </Col>
                        <Col lg={9}>
                            <h3>{movie.name}</h3>
                            <p>Price: {movie.price}</p>
                            <p>Ganre: {movie.ganre}</p>
                            <p>Date: {movie.date}</p>
                            <button className='btn btn-danger' onClick={() => removeFromList(index)}>
                                    Remove from List
                            </button>
                        </Col>
                    </Row>
                ))}
                <Row className='mt-3'>
                    <Col lg={12}>
                        <p>Total Price: {calculateTotal()}</p>
                    </Col>
                </Row>
            </>
        )}
    </Container>
    );
}

export default Cart;