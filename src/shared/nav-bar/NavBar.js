import './NavBar.css';
import { Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Badge, Container, FormControl, Nav, Navbar, NavItem, NavLink, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import LoginNew from '../../Admin/login/LoginNew';
import ViewAllMedicine from '../../User/list-medicine/ViewAllMedicine';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ViewAllUser from '../../User/list-medicine/ViewAllUser';
import React, { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';


function NavBar() {
    const navigate = useNavigate();
    const { cartItems, showHideCart } = useContext(CartContext);
    let isAdminValue = false;
    let firstName = '';
    const getJSON = localStorage.getItem('user');
    if (getJSON) {
        const user = JSON.parse(getJSON);
        firstName = user.firstName;
        isAdminValue = user.isAdmin;

    }

    function logOut() {
        localStorage.clear();
        navigate("/LoginNew")
    }

    function Profile() {
        navigate("/ViewAllUser")
    }

    if (getJSON) {

        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light" style={{ height: 70 }}>
                    <Nav.Item>
                    <Nav.Link className="navbar-brand NavItem text-info bg-dark font-monospace" href="/LoginNew">MedFine</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <div className='nav__middle'>
                            <div className='input__wrapper'>
                                <input type="text" />
                                <i className='fas fa-search' />
                            </div>
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-brand NavItem text-info bg-dark font-monospace"  href="/Search">Search</Nav.Link>
                    </Nav.Item>
                    <Navbar.Collapse className="justify-content-end">
                        <NavItem>
                            <Nav className="ms-auto">
                                <NavDropdown className="loginbtn navbar-brand NavItem text-primary text-info font-monospace" title={firstName}>
                                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                                    <NavDropdown.Item onClick={Profile}>Profile</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </NavItem>
                    </Navbar.Collapse>


                    <div className='cart__icon'>
                        <i
                            className='fa fa-shopping-cart'
                            aria-hidden='true'
                            onClick={showHideCart}
                        />
                        {cartItems.length > 0 && (
                            <div className='item__count'>
                                <span>{cartItems.length}</span>
                            </div>
                        )}
                    </div>


                </nav>

            </div>
        );
    }

    if (!getJSON) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ height: 70 }}>
                    <Nav.Item>
                        <Nav.Link className="navbar-brand NavItem text-info bg-dark font-monospace" href="/LoginNew">MedFine</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <div className='nav__middle'>
                            <div className='input__wrapper'>
                                <input type="text" />
                                <i className='fas fa-search' />
                            </div>
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-brand NavItem text-info bg-dark font-monospace" href="/Search">Search</Nav.Link>
                    </Nav.Item>

                    <div className='cart__icon'>
                        <i
                            className='fa fa-shopping-cart'
                            aria-hidden='true'
                            onClick={showHideCart}
                        />
                        {cartItems.length > 0 && (
                            <div className='item__count'>
                                <span>{cartItems.length}</span>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        );
    }
};

export default NavBar;