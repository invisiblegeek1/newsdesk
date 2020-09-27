import React,{useState} from 'react';
import Carousel from 'react-bootstrap';

function header(props){
  const [data,datahandler]=useState(props.Data);
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src={
        input[inx].urlToImage
          ? input[inx].urlToImage
          : "https://newsapi.org/images/n-logo-border.png"
      }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{input[inx].title}</h3>
      <p>{input[inx].content.split("[+")[0]}.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item></Carousel.Item>
  </Carousel>
    )
}