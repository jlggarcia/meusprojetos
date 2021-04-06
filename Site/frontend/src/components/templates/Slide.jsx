import './Slide.css'
import React from 'react'
import slide1 from '../imgs/slide1.png'
import slide2 from '../imgs/slide2.png'
import slide3 from '../imgs/slide3.png'
import Carousel from 'react-bootstrap/Carousel'


const CarouselContainer = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                className='slide'
                src={slide1} 
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <img
                className='slide'
                src={slide2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className='slide'
                src={slide3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselContainer;