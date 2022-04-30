import React, { useState, useEfect, Component } from 'react';

const validation = (values) => {

    let error = {};

    if (!values.Email) {
        error.Email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
        error.Email = "Email is invalid"
    }
    if (!values.Password) {
        error.Password = "Password is required"
    } else if (values.Password.length < 5) {
        error.Password = "Password must be greater than 5 characters"
    }

    return error;
        
};

export default validation;