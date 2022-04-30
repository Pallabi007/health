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
                            className="form-control font-monospace"
                            placeholder="Enter Keyword"
                            onChange={(e) => {
                                handlesearch(e);
                            }}
                        />
                        <table className="table " >
                            <thead>
                                <tr>
                                    <th className="font-monospace" scope="col">Id</th>
                                    <th className="font-monospace" scope="col">Name</th>
                                    <th className="font-monospace" scope="col">Company</th>
                                    <th className="font-monospace" scope="col">Price</th>
                                    <th className="font-monospace" scope="col">Quantity</th>
                                    <th className="font-monospace" scope="col">ImageUrl</th>
                                    <th className="font-monospace" scope="col">Uses</th>
                                    <th className="font-monospace" scope="col">Expiry Date</th>                                   
                                </tr>
                            </thead>
                            <tbody>
                                {serachcountry.length > 1
                                    ? filterresult.map((filtercountry, index) => (
                                        <tr key={index}>
                                            <td className="font-monospace"> {filtercountry.id} </td>
                                            <td className="font-monospace"> {filtercountry.name} </td>
                                            <td className="font-monospace"> {filtercountry.companyName} </td>
                                            <td className="font-monospace"> {filtercountry.price} </td>
                                            <td className="font-monospace"> {filtercountry.quantity} </td>
                                            <td className="font-monospace"> {filtercountry.imageUrl} </td>
                                            <td className="font-monospace"> {filtercountry.uses} </td>
                                            <td className="font-monospace"> {filtercountry.expireDate}</td>
                                        </tr>
                                    ))
                                    : allcountry.map((getcon, index) => (
                                        <tr key={index}>
                                            <td className="font-monospace"> {getcon.id} </td>
                                            <td className="font-monospace"> {getcon.name} </td>
                                            <td className="font-monospace"> {getcon.companyName} </td>
                                            <td className="font-monospace"> {getcon.price} </td>
                                            <td className="font-monospace"> {getcon.quantity} </td>
                                            <td className="font-monospace"> {getcon.imageUrl} </td>
                                            <td className="font-monospace"> {getcon.uses} </td>
                                            <td className="font-monospace"> {getcon.expireDate}</td>
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