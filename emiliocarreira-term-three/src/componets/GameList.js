import React, { useEffect, useState } from "react";
import GameCard from './GameCard';
import Row from "react-bootstrap/esm/Row";
import axios from "axios";

const GameList = () => {

    const [ game, setGame ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/games')
        .then(result => setGame(result.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <Row>
            {game.map((game) => (
                <GameCard key={game._id} id={game._id} game={game} />
            ))}
        </Row>
    )

}
export default GameList;



