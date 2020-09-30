import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./readmore.css";


const Readmore = (props) => {
  const input = props.location.data;
  const [inx, inHandler] = useState(props.location.index);
  

  return (
    <div className="readmore-container" key={inx}>
      <div className="readmoreimageContainer">
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

      <div className="content">{input[inx].description.split("[+")[0]}</div>
      
  
        <button className="button1" onClick={() => inHandler(inx - 1)}>{"<"}</button>
        <button className="button2" onClick={() => inHandler(inx + 1)}>{">"}</button>
    </div>
  );
};
export default withRouter(Readmore);
