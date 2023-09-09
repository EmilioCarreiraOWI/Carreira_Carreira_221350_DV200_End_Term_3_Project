import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";

const ClientList = () => {

    const [ game, setGame ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/games')
        .then(result => setGame(result.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <Row className="justify-content-center">
            {game.map((game) => (
                <ClientCard key={game._id} id={game._id} game={game} />
            ))}
        </Row>
    )

}
export default ClientList;