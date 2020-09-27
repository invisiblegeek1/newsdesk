import React, { useEffect, useState } from "react";
import "./component.css";
import { withRouter } from "react-router-dom";
import Data from './data';
import { Button } from "react-bootstrap";

function Card(props) {
  const [data, dataHandler] = useState(Data);
  // useEffect(() => {
  //   async function loadData() {
  //     let url = props.match.params.id
  //       ? `search/${props.match.params.id}`
  //       : props.title;
  //     fetch(`https://newszapp.herokuapp.com/${url}`)
  //       .then((response) => response.json())
  //       .then((res) => {
  //         dataHandler(res.articles);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  //   loadData();
  // }, [props.title, props.match.params.id]);

  const readmore = (index, res) => {
    props.history.push({
      pathname: `/readmore/${res.title}`,
      data:data,
      index:index
    });
  };

  return (
    <div id="container">
      {" "}
      {data.map((res, index) => {
        return (
          <div className="cardContainer" id="card" key={index}>
            <div className="imageContainer" id="photocontainer">
              <img
                className="image"
                id="photo"
                src={
                  res.urlToImage
                    ? res.urlToImage
                    : "https://newsapi.org/images/n-logo-border.png"
                }
                alt=""
              />
            </div>
            <div className="title-container">
              <p className="title">
                {res.title.replace(/^(.{50}[^\s]*).*/, "$1") + "..."}
              </p>
              
              <Button
                className="readmorebtn"
                variant="outline-primary"
                size="lg"
                onClick={() => readmore(index, res)}
              >
                Readmore
              </Button>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default withRouter(Card);
//  t.replace(/^(.{1}[^\s]*).*/, "$1") + "\n"
