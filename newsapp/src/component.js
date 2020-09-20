import React, { useEffect, useState } from "react";
import "./component.css";


export const Card = (props) => {
  const [data, dataHandler] = useState([]);
  useEffect(() => {
    async function loadData() {
      fetch(
        `https://newszapp.herokuapp.com/${props.title }`
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res.articles);
          dataHandler(res.articles);
        })
        .catch((error) => console.log(error));
    }
    loadData();
  }, [props.title]);

  return (
    
    <div className="cardCcontainer" id="container">
      {data
        ? data.map((res,index) => {
            return (
              <div className="cardContainer" id="card" key={index}>
                <div className="imageContainer" id="photocontainer">
                  <img
                    className="image"
                    id="photo"
                    src={res.urlToImage}
                    alt=""
                  />
                </div>
                <p className="title">{res.title}</p>

                <div className="article">
                  <p>{res.description}</p>
                  <button className="readmore">Read more</button>
                </div>
              </div>
            );
          })
        :null}
    </div>
  );
};
