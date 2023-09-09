import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

const DisplayIDs_5 = () => {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint URL
    axios.get('http://localhost:5000/api/games')
      .then((response) => {
        const first10Ids = response.data.slice(12, 17); // Get the first 10 IDs
        setIds(first10Ids);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        {ids.map((ids) => (
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn mx-3 mt-4' to={`/Indevidual/${ids._id}`}>
                <img className='card-img w-100 h-auto' src={ids.image} alt={ids.image}></img>
                <Link to={`/Indevidual/${ids._id}`} className="btn btn-secondary text-center mt-2 w-100 btn-outline-light">{ids.name}</Link>
            </Col>
        ))}
    </div>
  );
};

export default DisplayIDs_5;