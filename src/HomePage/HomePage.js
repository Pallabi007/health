import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/doctors.jpg'
import img7 from '../Images/doctors7.jpg'
import img8 from '../Images/doctors8.webp'
import img9 from '../Images/doctors8.jpg'

import NavBar from '../shared/nav-bar/NavBar';

function HomePage() {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={img8}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 data-testid="todo-1">Get instant Diagnosis</h3>
                        <p>We help you getting the right solution</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={img7}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Get instant Assistance</h3>
                        <p>We help you getting the right Doctor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get instant Assistance</h3>
                        <p>We help you getting the right Doctor</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img9}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get instant Assistance</h3>
                        <p>We help you getting the right Doctor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomePage;