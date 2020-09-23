import React, { useEffect, useState } from "react";
import "./component.css";
import {withRouter} from 'react-router-dom';




 function Card(props){
  const [data, dataHandler] = useState([]);
  useEffect(() => {
    async function loadData() {
      let url=props.match.params.id?`search/${props.match.params.id}`:props.title;
      fetch(
        `https://newszapp.herokuapp.com/${url}`
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res.articles);
          dataHandler(res.articles);
        })
        .catch((error) => console.log(error));
    }
    loadData();
  }, [props.title,props.match.params.id]);
  

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
                    src={res.urlToImage?res.urlToImage:"https://newsapi.org/images/n-logo-border.png"}
                    alt=""
                  />
                </div>
                <p className="title">{res.title}</p>

                
              </div>
            );
          })
        :null}
    </div>
  );
}
 export default withRouter(Card);