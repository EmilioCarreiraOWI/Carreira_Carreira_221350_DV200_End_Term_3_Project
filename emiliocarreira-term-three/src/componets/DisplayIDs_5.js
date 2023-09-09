import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

const DisplayIDs_5 = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint URL
    axios.get('http://localhost:5000/api/games')
      .then((response) => {
        const first10Ids = response.data.slice(12, 17); // Get the first 10 IDs
        setGame(first10Ids);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

    const handleSelectGame = (gameId) => {
        // Save the selected game ID to sessionStorage
        sessionStorage.setItem('selectedGameId', gameId);
      };

  return (
    <Col>
      {game.map((game) => (
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
      ))}
    </Col>
  );
};

export default DisplayIDs_5;