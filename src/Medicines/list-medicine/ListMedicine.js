import React, { useEffect, useState } from "react";
import './ListMedicine.css';
import NavBar from "../../shared/nav-bar/NavBar";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cart from "../../Components/Cart";
import HomeScreen from "../../screens/HomeScreen";


function ListMedicine() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    let isAdminValue = false;
    let firstName = '';
    const getJSON = localStorage.getItem('user');
    if (getJSON) {
        const user = JSON.parse(getJSON);
        firstName = user.firstName;
        isAdminValue = user.isAdmin;
        console.log("firstName " + firstName);
        console.log("isAdmin " + isAdminValue);
    }


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

    function deleteUser(id) {
        console.warn(id)
        fetch(`https://localhost:44303/api/admin/deleteMedicineById/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
        }).then((resp) => {
            console.log(resp.status)
            if (resp.status == 200) {
                getMeds()
            }
        })
    }

    function goToForm() {
        navigate("/Medicine/0")
    }

    if (getJSON) {
        if (firstName != "Admin" && !isAdminValue) {
            return (
                <>
                    <NavBar />
                    <br />
                    <h5 className='text-center fst-italic text-success font-monospace'>Welcome {firstName} !</h5>
                    <Cart />
                    <HomeScreen />
                </>
            )
        }
        if (firstName == "Admin" && isAdminValue) {
            return (
                <div>
                    <NavBar />
                    <div className="container">
                        <button type='button' onClick={goToForm} className='btn btn-primary font-monospace'>New Medicine</button>
                        <br />
                        <br />
                        <table className="table table-striped border shadow">
                            <thead>
                                <tr>
                                    <th className='font-monospace' scope="col">Id</th>
                                    <th className='font-monospace' scope="col">Name</th>
                                    <th className='font-monospace' scope="col">Company</th>
                                    <th className='font-monospace' scope="col">Price</th>
                                    <th className='font-monospace' scope="col">Quantity</th>
                                    <th className='font-monospace' scope="col">ImageUrl</th>
                                    <th className='font-monospace' scope="col">Uses</th>
                                    <th className='font-monospace' scope="col">Expiry Date</th>
                                    <th className='font-monospace' scope="col">Remove</th>
                                    <th className='font-monospace' scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product =>
                                        <tr>
                                            <td className='font-monospace' >{product.id}</td>
                                            <td className='font-monospace' >{product.name}</td>
                                            <td className='font-monospace' >{product.companyName}</td>
                                            <td className='font-monospace' >Rs {product.price}</td>
                                            <td className='font-monospace' >{product.quantity}</td>
                                            <td ><img src={product.imageUrl} alt="" height="100" width="100" /></td>
                                            <td className='font-monospace' >{product.uses}</td>
                                            <td className='font-monospace' >{product.expireDate}</td>
                                            <td className='font-monospace' ><button onClick={() => deleteUser(product.id)} className='btn btn-dark'>Delete</button></td>
                                            <td className='font-monospace' ><Link to={`/Useredit/${product.id}`} className="btn btn-success">Edit</Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
    
}

export default ListMedicine;