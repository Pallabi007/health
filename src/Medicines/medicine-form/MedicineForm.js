import { useState, useEffect } from "react";
import NavBar from "../../shared/nav-bar/NavBar";
import './MedicineForm.css'
import { useNavigate } from 'react-router-dom';
import { Container, Navbar } from "react-bootstrap";

function MedicineForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [uses, setUses] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    function HandleSubmit(event) {
        event.preventDefault();
        let data = { name, company, price, quantity, imageUrl, uses, expireDate }
        fetch("https://localhost:44303/api/admin/addMedicine", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((result) => { 
              result.json().then((resp)=>{})
             .then(() => navigate('/Medicine'));
         })   
}

return (
    <div>
        <NavBar></NavBar>                  
        <Container>
        <h6 className="text-center display-6 text-info bg-dark font-monospace">Enter New Medicine</h6>
        <div className="row fthight">
            <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name"
                        className="form-control font-monospace" required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Company</label>
                    <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} name="company"
                        className="form-control font-monospace" />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Price</label>
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price"
                        className="form-control font-monospace" required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Quantity</label>
                    <input type="text" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} name="quantity"
                        className="form-control font-monospace" required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Image URL</label>
                    <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} name="imageUrl"
                        className="form-control font-monospace " />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Uses</label>
                    <input type="text"  value={uses} onChange={(e) => { setUses(e.target.value) }} name="uses"
                        className="form-control font-monospace" />
                </div>
                <div className="mb-3">
                    <label className="form-label text-primary font-monospace">Expiry Date</label>
                    <input type="date" value={expireDate} onChange={(e) => { setExpireDate(e.target.value) }} name="expireDate"
                        className="form-control font-monospace" />
                </div>


                <button type="submit" className="btn btn-primary font-monospace">Save</button>
            </form>
        </div>
        </Container>
    </div>
)
}

export default MedicineForm;