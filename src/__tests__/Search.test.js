import { render, screen, cleanup } from '@testing-library/react';
import Search from '../Medicines/list-Medicine/Search';
import { BrowserRouter as Router } from 'react-router-dom';
import CartState from "../context/cart/CartState";


test('Should render Search Page', () => {
    render(
        <Router>
            <CartState>
                <Search />,
            </CartState>  ,
        </Router>,
    );
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Search Page');
})

