import React from 'react';
import { Carousel } from 'react-bootstrap';

const carousel = props => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="data:image/jpeg;base64,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"
                width= "800" height = "400"
                alt="First Slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://femina.wwmindia.com/content/2020/apr/stay-healthy-home-1587730266.jpg"
                alt="Third slide" width="800" height = "400"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                width ="800" height = "400"
                src="https://femina.wwmindia.com/content/2020/apr/stay-healthy-home-1587730266.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default carousel;