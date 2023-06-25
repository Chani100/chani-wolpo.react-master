import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://res.cloudinary.com/globes/image/upload/c_fill,g_custom,h_392,w_800/dpr_2.0/q_auto:good/v1685539686/direct/%D7%AA%D7%A8%D7%91%D7%95%D7%AA%201.6.23/IMG-7260_vxmyoc.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Null life of elite libero, the pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://www.habsor.co.il/wp-content/uploads/2021/11/midbar3-800x600.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elite.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../Image/lobster-roll.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              They offer a comfortable course magna, but very scelerisque and nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  
export default CarouselHome;
