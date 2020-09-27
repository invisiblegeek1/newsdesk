import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./readmore.css";
import {Carousel} from 'react-bootstrap';

const Readmore = (props) => {
  const input = props.location.data;
  const [inx, inHandler] = useState(props.location.index);
  console.log(input[inx].content.split("[+")[0]);

  return (
    <div className="readmore-container" key={inx}>
      {/* <div className="readmoreimageContainer">
        <img
          className="image"
          src={
            input[inx].urlToImage
              ? input[inx].urlToImage
              : "https://newsapi.org/images/n-logo-border.png"
          }
          alt=""
        />
      </div>

      <h1 id="heading">{input[inx].title}</h1>
      <hr></hr>

      <div className="content">{input[inx].content.split("[+")[0]}</div> */}
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
      <button onClick={() => inHandler(inx - 1)}><span ><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span></button>
      <button onClick={() => inHandler(inx + 1)}><span ><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></span></button>
    </div>
  );
};
export default withRouter(Readmore);
