import React from "react";
import Printers from '../components/Printers'
import {Carousel} from 'react-bootstrap';
import Imagen1 from '../assets/img/carrusel1.webp'
import Imagen2 from '../assets/img/carrusel2.webp'

export default function Home() {
  return (
    <div className="home">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block img"
          src={Imagen1}
          alt={Imagen1}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src={Imagen2}
          alt={Imagen2}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block img"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
      <Printers/>
    </div>
  );
}
