import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from './1C.jpg'
import immg from './2C.jpg'
import imgg from './3C.jpg'



function Crousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <div style={{display:'block',width:500,marginLeft:300,background:'rgba(153, 191, 56, 1)'}}>
          <h3>ONE OF THE BEST BOREWELLS DRILLING COMPANY IN BANGALORE</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={immg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div style={{display:'block',width:500,marginLeft:300,background:'rgba(153, 191, 56, 1)'}}>
          <p>Welcome</p>
          <h3>SRI RAJARAJESHWARI BOREWELL <br/>& PUMPS</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div style={{display:'block',width:500,marginLeft:300,background:'rgba(153, 191, 56, 1)'}}>
          <h3>TRUSTED & REALIABLE BOREWELL CONTRACTORS</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Crousal
