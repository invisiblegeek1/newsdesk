import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./readmore.css";

const Readmore = (props) => {
  const input = props.location.state.content;
  let text;
  const [inx, inHandler] = useState(props.location.state.index);
  if (input[inx].description) {
    text = input[inx].description.split("[+")[0];
  } else {
    text = input[inx].content.split("[+")[0];
  }
  let image = input[inx].urlToImage
    ? input[inx].urlToImage
    : "https://newsapi.org/images/n-logo-border.png";
  let learnMore = input[inx].url;

  return (
    <div className="readmore-container" key={inx}>
      <div className="readmoreimageContainer">
        <img className="image" src={image} alt="" />
      </div>

      <h1 id="heading">{input[inx].title}</h1>
      <hr></hr>

      <div className="content">{text}</div>
      <button className="learnBtn">
        <a href={learnMore}>know more from {input[inx].source.name}</a>
      </button>

      {input[inx - 1] ? (<button className="button1" onClick={() => inHandler(inx - 1)}>
        <i class="fas fa-less-than"></i>
      </button>) : (<button className="btn" style={{ visibility: "hidden" }}></button>)}
      {input[inx + 1] ? (<button className="button2" onClick={() => inHandler(inx + 1)}>
        <i class="fas fa-greater-than"></i>
      </button>) : (<button className="btn" style={{ visibility: "hidden" }}></button>)}
    </div>
  );
};
export default withRouter(Readmore);