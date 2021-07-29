import React, { Component } from 'react'
import {Carousel, Container  } from 'react-bootstrap';

import "./CarouselBody.css"

export default class CarouselBody extends Component {
    render() {
        return (
<Container fluid="md">
  <Carousel className="grup">
        <Carousel.Item>
          <img
            className="gambar d-block  w-100 "
            src="Image/IMG-20170317-WA0018.jpg"
            alt="First slide"/>

          {/* <Carousel.Caption>
            <h3>SDS CERDAS BANGSA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}

</Carousel.Item>
<Carousel.Item>
    <img
      className="gambar d-block  w-100"
      src="Image/IMG_0201.JPG"
      alt="Second slide"/>

{/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
</Carousel.Item>
<Carousel.Item>
    <img
      className="gambar d-block  w-100"
      src="Image/IMG_8561.JPG"
      alt="Third slide"/>


    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</Container>
        )
        }
      }
  
