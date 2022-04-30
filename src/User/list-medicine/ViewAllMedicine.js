import React, { useEffect, useState } from "react";
import './ViewAllMedicine.css';
import NavBar from "../../shared/nav-bar/NavBar";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ViewAllMedicine() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    useEffect(() => {
        getMeds()
    }, []);

    function getMeds() {
        fetch("https://localhost:44303/api/admin/getAllMedicine").then((result) => {
            result.json().then((resp) => {
                setProducts(resp)
            })
        })
    }   


    function goToForm() {
        navigate("/Medicine/0")
    }

    function handleClick(){
        console.log("Add to cart clicked")
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">

                <button type='button' onClick={goToForm} className='btn btn-primary'>New Medicine</button>
                <br />

                <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">ImageUrl</th>
                            <th scope="col">Uses</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Remove</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                                <tr>
                                    <div className="cards">
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.companyName}</td>
                                        <td>Price - {product.price}Rs</td>
                                        <td>{product.quantity}</td>
                                        <td >
                                            <div className="image_box">
                                                <img src={product.imageUrl} alt="" />
                                            </div>
                                        </td>
                                        <td>{product.uses}</td>
                                        <td>{product.expireDate}</td>
                                        
                                        <td><button onClick={() => handleClick(product.id)}
                                            className='btn btn-dark'>Add to Cart</button></td>                                        

                                        
                                    </div>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewAllMedicine;