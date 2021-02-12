import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";

function CarouselComponent() {
    
    return (
        <div className="carousel__container">

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/characters-people-holding-multimedia-icons-illustration_53876-32615.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/group-medical-staff-carrying-health-related-icons_53876-43071.jpg?size=626&ext=jpg&ga=GA1.2.1539906418.1582186645"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/soil-chemistry-abstract-concept-vector-illustration-soil-chemical-analysis-bioremediation-environmental-problem-laboratory-service-pollution-level-agricultural-chemistry-abstract-metaphor_335657-4259.jpg?size=338&ext=jpg&ga=GA1.2.1539906418.1582186645"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/badminton-abstract-concept-vector-illustration-racket-sport-outdoor-recreational-activity-badminton-tournament-sporting-goods-people-playing-club-training-competition-abstract-metaphor_335657-4287.jpg?size=338&ext=jpg&ga=GA1.2.1539906418.1582186645"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/server-maintenance-service-information-transfer-hardware-settings-network-server-idea-hosting-technology-database-storage-programming-equipment-vector-isolated-concept-metaphor-illustration_335657-4335.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselComponent
