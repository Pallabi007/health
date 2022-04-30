import React, { useState, useEffect } from "react";
import NavBar from "../../shared/nav-bar/NavBar";
import { Container, Navbar } from "react-bootstrap";

function Search() {
    const [allcountry, setAllcountry] = useState([]);
    const [filterresult, setFilterresult] = useState([]);
    const [serachcountry, setSearchcountry] = useState("");

    const handlesearch = (event) => {
        const search = event.target.value;
        console.log(search);
        setSearchcountry(search);

        if (search !== "") {
            const filterdata = allcountry.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
            setFilterresult(filterdata);
        } else {
            setFilterresult(allcountry);
        }
    };

    useEffect(() => {
        const getcountry = async () => {
            const getres = await fetch("https://localhost:44303/api/admin/getAllMedicine");
            const setcounty = await getres.json();            
            setAllcountry(await setcounty);
        };
        getcountry();
    }, []);

    return (
        <React.Fragment>           
            <NavBar />
            <Container>
                <h6 data-testid="todo-1" className="text-center display-6 text-info bg-dark font-monospace">Search Page</h6>
                <div className="row fthight">
                    <div className="col-md-6 mb-3 mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Keyword"
                            onChange={(e) => {
                                handlesearch(e);
                            }}
                        />
                        <table className="table " >
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
                                </tr>
                            </thead>
                            <tbody>
                                {serachcountry.length > 1
                                    ? filterresult.map((filtercountry, index) => (
                                        <tr key={index}>
                                            <td> {filtercountry.id} </td>
                                            <td> {filtercountry.name} </td>
                                            <td> {filtercountry.companyName} </td>
                                            <td> {filtercountry.price} </td>
                                            <td> {filtercountry.quantity} </td>
                                            <td> {filtercountry.imageUrl} </td>
                                            <td> {filtercountry.uses} </td>
                                            <td> {filtercountry.expireDate}</td>
                                        </tr>
                                    ))
                                    : allcountry.map((getcon, index) => (
                                        <tr key={index}>
                                            <td> {getcon.id} </td>
                                            <td> {getcon.name} </td>
                                            <td> {getcon.companyName} </td>
                                            <td> {getcon.price} </td>
                                            <td> {getcon.quantity} </td>
                                            <td> {getcon.imageUrl} </td>
                                            <td> {getcon.uses} </td>
                                            <td> {getcon.expireDate}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>        
            
        </React.Fragment>
    );
}

export default Search;