import React, { useState, useEffect } from 'react';
//import {useHistory } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from "../../shared/nav-bar/NavBar";
import { Link } from 'react-router-dom';



function ViewAllUser() {

    const [useredit, setUseredit] = useState({ firstName: '', lastName: '', email: '', dateOfBirth: '', phone: '', address: '' });
    const navigate = useNavigate();
    const { id } = useParams();
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    let isAdminValue = false;
    let firstName = '';
    const getemail = localStorage.getItem('email');
    const getJSON = localStorage.getItem('user');
    if (getJSON) {
        const user = JSON.parse(getJSON);
        firstName = user.firstName;
        isAdminValue = user.isAdmin;

    }
    if (getemail) {
        console.log(getemail)
    }

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`https://localhost:44303/api/user/findUser/${getemail}`);
            const res = await reqdata.json();
            setUseredit(await res);
        }
        edituserid();
    }, []);


    const handleEdit = (e) => {
        setUseredit({ ...useredit, [e.target.name]: e.target.value });
    }

    const HandleUserupdate = async (e) => {

        e.preventDefault();

        fetch("https://localhost:44303/api/user/editUser", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(useredit)
        })
            .then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)

                })
                    .then(() => navigate('/loginnew'))
            })
    }

    return (
        <React.Fragment>
            <NavBar />
            <Container>
                <h2 className="text-center text-info bg-dark font-monospace">Profile Details</h2>
                <div className="row fthight">
                    <form onSubmit={HandleUserupdate}>
                        <div className="mb-3">
                            <label className="form-label">FirstName</label>
                            <input type="text"
                                name="firstName"
                                className="form-control"
                                value={useredit.firstName}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">lastName</label>
                            <input type="text"
                                name="lastName"
                                className="form-control"
                                value={useredit.lastName}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">email</label>
                            <input type="text"
                                name="email"
                                className="form-control"
                                value={useredit.email}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">dateOfBirth</label>
                            <input type="text"
                                name="dateOfBirth"
                                className="form-control"
                                value={useredit.dateOfBirth}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">phone</label>
                            <input type="text" name="phone"
                                className="form-control"
                                value={useredit.phone}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">address</label>
                            <input type="text" name="address"
                                className="form-control"
                                value={useredit.address}
                                onChange={(e) => handleEdit(e)}
                            />
                        </div>

                        <div className="col-md-3">
                            <button type="submit" className="btn btn-primary mt-4">
                                Update
                            </button>

                        </div>
                    </form>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default ViewAllUser;