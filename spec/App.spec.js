//import React from 'react'
const { React } = require('react');
//import App from '../App'
//import {create} from 'react-test-renderer';
const { create } = require('react-test-renderer');

describe('My orst snapshot test',() =>{
  test('testing app button', () => {
     let tree = create(<app />)
     expect(tree.toJSON()).toMatchSnapshot();
  })
  });

  //

//test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});
