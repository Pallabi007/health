import './Login.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEfect, Component } from 'react';
import NavBar from '../../shared/nav-bar/NavBar';
import HomePage from '../../HomePage/HomePage';
import ListMedicine from '../../Medicines/list-medicine/ListMedicine';
import { Badge, Container, FormControl, Nav, Navbar, NavItem, NavLink, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';



function LoginNew() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handlelogin = async (e) => {
        e.preventDefault();
        let item = { Email, Password };
        fetch("https://localhost:44303/api/user/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)

        })
            .then(res => res.json())
            .then(res => localStorage.setItem('user', JSON.stringify(res)))
            .then(localStorage.setItem('email', Email))
            .then(() => navigate('/Medicine'));
    }

    function GotoRegistration() {
        navigate("/Registration")
    }
    let firstName = '';
    let isAdminValue = '';
    const getJSON = localStorage.getItem('user');
    if (getJSON) {
        const user = JSON.parse(getJSON);
        firstName = user.firstName;
        isAdminValue = user.isAdmin;
    }

    if (!getJSON) {
        return (
            <div>
                <div>
                    <NavBar />
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-9'>
                                <HomePage />
                            </div>
                            <div className='col-md-3'>
                                <form onSubmit={handlelogin}>
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item text-center">
                                            <a class="nav-link active btl font-monospace" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a> </li>
                                    </ul>
                                    <label htmlFor="Email" className="font-monospace">Email</label>
                                    <input type="Email" id="Email" onChange={(e) => setEmail(e.target.value)}
                                        name="Email" className="form-control font-monospace" required placeholder="Email" /><br />

                                    <label htmlFor="password" className="font-monospace">Password</label>
                                    <input type="password" id="Password" onChange={(e) => setPassword(e.target.value)}
                                        name="Password" className="form-control font-monospace" required placeholder="Password" /><br />

                                    <button type="submit" className="btn btn-primary font-monospace ">Login</button>
                                    <button type="button" onClick={GotoRegistration} className="btn btn-primary ms-auto font-monospace">SignUp</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (getJSON) {
        return (
            <ListMedicine />
        )
    }
}

export default LoginNew;