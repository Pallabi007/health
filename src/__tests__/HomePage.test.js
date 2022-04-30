import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '../HomePage/HomePage.js';
import { BrowserRouter as Router } from 'react-router-dom';
import CartState from "../context/cart/CartState";


test('Should render Home Page ', () => {
    render(
        <Router>
            <CartState>
                <HomePage />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Get instant Diagnosis');
})


