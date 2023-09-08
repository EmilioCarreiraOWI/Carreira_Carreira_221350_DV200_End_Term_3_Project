import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Navigate, useNavigate, useParams } from "react-router-dom";

function FormUpdate() {

    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [ganre, setGanre] = useState();
    const [info, setInfo] = useState();
    
    
    const {id}=useParams()

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const navigate= useNavigate()

    const style = {
        margin: "10px",
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/form/'+id)
            .then((res) => {
                setProducts(res.data)
                
            })
            .catch()
    })

    const updateProduct=(e)=>{
        e.preventDefault()
        let payload = { name: productName, price: productPrice, stock: productStock, category: productCategory }
        axios.patch('http://localhost:5000/api/form/'+id, payload)
        .then(res=>{
            console.log('userEditSuccessfully')
            navigate('/form')
        })
    }

    return (

        <div style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
            <form onSubmit={updateProduct}>
                <div className="form">
                    <h1 style={{ color: "black" }} >Products</h1>
                    <div >
                        <input style={style}
                            type="text"
                            placeholder= {products.name}
                            onChange={(e => setProductName(e.target.value))}
                        />
                        <input style={style}
                            type="number"
                            placeholder={products.price}
                            onChange={(e => setProductPrice(e.target.value))}
                        />
                        <input style={style}
                            type="number"
                            placeholder={products.stock}
                            onChange={(e => setProductStock(e.target.value))}
                        />
                        <input style={style}
                            type="text"
                            placeholder={products.category}
                            onChange={(e => setProductCategory(e.target.value))}
                        />
                        
                        <button onClick={e=>updateProduct(e)} style={style}>Update Product</button>
                        <button style={style}>Delete Product</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default FormUpdate;