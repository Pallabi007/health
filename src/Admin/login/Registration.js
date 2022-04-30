import React, { useState, Component } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../shared/nav-bar/NavBar';
import HomePage from '../../HomePage/HomePage';
import { Container, Navbar } from "react-bootstrap";

function Registration() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [DOB, setDOB] = useState("");
    const [Phone, setPhone] = useState("");
    const [Address, setAddress] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault();
        let useritem = { FirstName, LastName, Email, Password, DOB, Phone, Address }

        let result = await fetch("https://localhost:44303/api/user/signup", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(useritem)
        })
            .then(res => res.json())
            .then(() => navigate('/LoginNew'));
    }

    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <h6 className="text-center display-6 text-info bg-dark font-monospace" data-testid="todo-1">Registration Page</h6>
                <div className="row fthight">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label data-testid="FirstName" className="form-label text-primary font-monospace" htmlFor="FirstName">FirstName</label>
                            <input type="text" onChange={(e) => setFirstName(e.target.value)} id="FirstName"
                                name="FirstName" className="form-control font-monospace" placeholder="Firstname" required />
                        </div>
                        <div className="mb-3">
                            <label data-testid="Lastname" className="form-label text-primary font-monospace" htmlFor="LastName">Lastname</label>
                            <input type="text" onChange={(e) => setLastName(e.target.value)} id="LastName"
                                name="LastName" className="form-control font-monospace" placeholder="LastName" required />
                        </div>
                        <div className="mb-3">
                            <label data-testid="Email" className="form-label text-primary font-monospace" htmlFor="Email">Email</label>
                            <input type="Email" id="Email" onChange={(e) => setEmail(e.target.value)}
                                name="Email " className="form-control font-monospace" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-primary font-monospace" htmlFor="password">Password</label>
                            <input type="password" id="Password" onChange={(e) => setPassword(e.target.value)}
                                name="Password" className="form-control font-monospace" placeholder="Password" required />
                        </div>
                        <div className="mb-3">
                            <label data-testid="DOB" className="form-label text-primary font-monospace" htmlFor="DOB">Date of Birth</label>
                            <input type="date" id="DOB" onChange={(e) => setDOB(e.target.value)}
                                name="DOB" className="form-control font-monospace" placeholder="Date of Birth" />
                        </div>
                        <div className="mb-3">
                            <label data-testid="Phone" className="form-label text-primary font-monospace" htmlFor="Phone">Phone</label>
                            <input type="Phone" id="Phone" onChange={(e) => setPhone(e.target.value)}
                                name="Phone" className="form-control font-monospace" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                            <label data-testid="Address" className="form-label text-primary font-monospace" htmlFor="Address">Address</label>
                            <input type="Address" id="Address" onChange={(e) => setAddress(e.target.value)}
                                name="Address" className="form-control font-monospace" placeholder="Address" />
                        </div>
                        <button type="submit" className="btn btn-primary font-monospace">Register</button>

                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Registration;