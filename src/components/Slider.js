import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "./images/img-home.jpg";
import img2 from "./images/img-8.jpg";
import img3 from "./images/img-home.jpg";

export default function Slider() {
    return (
        <Carousel>
           <Carousel.Item style={{'height':'600px'}}>
               <img
                   className="d-block w-100"
                   src={img1}
                   alt="First slide"
               />
               <Carousel.Caption>
                  <h3>Web Developer Blog</h3>
                   <p>My Web Developer Blog : igor JS </p>
               </Carousel.Caption>
           </Carousel.Item>
            <Carousel.Item style={{'height':'600px'}}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>My Web Developer Blog : igor JS </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'600px'}}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>My Web Developer Blog : igor JS </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}