import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Navigate, useNavigate, useParams } from "react-router-dom";

function FormUpdate() {

    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Date, setDate] = useState();
    const [Image, setImage] = useState();
    const [Ganre, setGanre] = useState();
    const [Info, setInfo] = useState();
    
    
    const {id}=useParams()

    const [game, setGame] = useState([]);
    const [selected, setSelected] = useState({});
    const navigate= useNavigate()

    const style = {
        margin: "10px",
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/form/'+id)
            .then((res) => {
                setGame(res.data)
                
            })
            .catch()
    })

    const update=(e)=>{
        e.preventDefault()
        let payload = { name: Name, price: Price, date: Date, ganre: Ganre, image: Image, info: Info }
        axios.patch('http://localhost:5000/api/games/'+id, payload)
        .then(res=>{
            console.log('userEditSuccessfully')
            navigate('/AddGame')
        })
    }

    return (

        <div style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
            <form onSubmit={update}>
                <div className="form">
                    <h1 style={{ color: "black" }} >Products</h1>
                    <div >
                        <input style={style}
                            type="text"
                            placeholder= {game.name}
                            onChange={(e => setName(e.target.value))}
                        />
                        <input style={style}
                            type="number"
                            placeholder={game.price}
                            onChange={(e => setPrice(e.target.value))}
                        />
                        <input style={style}
                            type="number"
                            placeholder={game.stock}
                            onChange={(e => setDate(e.target.value))}
                        />
                        <input style={style}
                            type="text"
                            placeholder={game.category}
                            onChange={(e => setGanre(e.target.value))}
                        />
                        
                        <button onClick={e=>update(e)} style={style}>Update Game</button>
                        <button style={style}>Delete Game</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default FormUpdate;