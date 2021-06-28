import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import "./CarouselBody.css"

export default class CarouselBody extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <div className="slide">
                <h1>www</h1>
                </div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="slide">
                <h1>xxx</h1>
                </div>
              {/* <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              /> */}
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="slide">
                <h1>zzz</h1>
                </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
