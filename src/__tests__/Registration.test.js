import { render, screen, cleanup } from '@testing-library/react';
import Registration from '../Admin/login/Registration';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CartState from "../context/cart/CartState";


test('Should render Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Registration Page');
})

test('Should render FirstName in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('FirstName');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('FirstName');
})

test('Should render Lastname in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('Lastname');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Lastname');
})

test('Should render Email in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('Email');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Email');
})

test('Should render DOB in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('DOB');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Date of Birth');
})

test('Should render Phone in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('Phone');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Phone');
})

test('Should render Address in Registration Page', () => {
    render(
        <Router>
            <CartState>
                <Registration />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('Address');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Address');
})




