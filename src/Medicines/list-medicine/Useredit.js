import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './ListMedicine.css';
import NavBar from "../../shared/nav-bar/NavBar";


function Useredit() {

    const [useredit, setUseredit] = useState({ name: '', company: '', price: '', quantity: '', imageUrl: '', uses: '', expireDate: '' });
    const navigate = useNavigate();
    const { id } = useParams();
    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`https://localhost:44303/api/admin/${id}`);
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

        fetch("https://localhost:44303/api/admin/UpdateMedicine", {
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
                .then(() => navigate('/Medicine'))
            })
    }

    return (
        <React.Fragment>
            <NavBar />
            <Container classname="content">
                <h6 data-testid="todo-1" className="text-center display-6 text-info bg-dark font-monospace">Edit Medicine</h6>
                <form onSubmit={HandleUserupdate}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            value={useredit.name}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company</label>
                        <input type="text"
                            name="company"
                            className="form-control"
                            value={useredit.company}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text"
                            name="price"
                            className="form-control"
                            value={useredit.price}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="text"
                            name="quantity"
                            className="form-control"
                            value={useredit.quantity}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input type="text" name="imageUrl"
                            className="form-control"
                            value={useredit.imageUrl}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Uses</label>
                        <input type="text" name="uses"
                            className="form-control"
                            value={useredit.uses}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expiry Date</label>
                        <input type="text" name="expireDate"
                            className="form-control"
                            value={useredit.expireDate}
                            onChange={(e) => handleEdit(e)}
                        />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary mt-4">
                            Update
                        </button>

                    </div>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Useredit;