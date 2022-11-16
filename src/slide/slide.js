import Carousel from 'react-bootstrap/Carousel';
import './slide.css';
function UncontrolledExample() {
  return (
    <Carousel className="imgs">
      <Carousel.Item>
        <img
          className="img"
          src="w1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First produit</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="w2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second product </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="w3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='cap'>
          <h3>Third product</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;