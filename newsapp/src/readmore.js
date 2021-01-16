import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./readmore.css";

const Readmore = (props) => {
  const input = props.location.state.content;
  let text;
  const [inx, inHandler] = useState(props.location.state.index);
  if (input[inx].description) {
    text = input[inx].description.split("[+")[0];
  } else if (input[inx].content) {
    text = input[inx].content.split("[+")[0];
  }
  else {
    text = input[inx].source.name;
  }
  let image = input[inx].urlToImage
    ? input[inx].urlToImage
    : "/mylogo1.png";
  let learnMore = input[inx].url;

  const ImgUrlValidater = (ImageUrl) => {
    return ImageUrl.includes("http://")
      ? ImageUrl.replace("http://", "https://")
      : ImageUrl;
  }

  return (
    <div className="readmore-container" key={inx}>

      <div className="readmoreimageContainer">
        <img className="image" onError={(e) => (e.target.src = "/mylogo1.png")} src={ImgUrlValidater(image)} alt="" />
      </div>
      <p id="heading">{input[inx].title}</p>
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