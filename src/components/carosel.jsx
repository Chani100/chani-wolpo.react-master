import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <Carousel.Caption>
            <h5 className="title">gggg</h5>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="https://res.cloudinary.com/globes/image/upload/c_fill,g_custom,h_392,w_800/dpr_2.0/q_auto:good/v1685539686/direct/%D7%AA%D7%A8%D7%91%D7%95%D7%AA%201.6.23/IMG-7260_vxmyoc.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h5 className="title">gggg</h5>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="https://www.habsor.co.il/wp-content/uploads/2021/11/midbar3-800x600.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h5 className="title">gggg</h5>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="../image/pexels-photo-941869.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h5 className="title">gggg</h5>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="../image/pexels-photo-2983101.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h5 className="title">gggg</h5>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="../image/pexels-photo-1707957.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  
export default CarouselHome;
