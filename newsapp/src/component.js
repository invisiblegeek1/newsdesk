import React, { useState, useEffect } from "react";
import "./component.css";
import { withRouter } from "react-router-dom";
//import Data from './data';
import Fade from 'react-reveal/Fade'
import { Spinner } from 'react-bootstrap';





function Card(props) {
  const [data, dataHandler] = useState({ loading: true });
  

  useEffect(() => {
    async function loadData() {
      let url = () => {
        return props.match.params.id
          ? `search/${props.match.params.id}`
          : props.title
      }
      const heading=url();
      sessionStorage.newsHeading=heading;
      sessionStorage.setItem('newsHeading', heading)
      let title = url()+'heading';
      let session = JSON.parse(sessionStorage.getItem(title));
      if (session) {

        dataHandler({ loading: false, Data: session });

      }
      else {
        fetch(`https://newszapp.herokuapp.com/${url()}`)
          .then((response) => response.json())
          .then((res) => {
            sessionStorage.setItem(title, JSON.stringify(res.articles))
            dataHandler({ loading: false, Data: res.articles });
            console.log(res.articles);
          })
          .catch((error) => console.log(error));
      }
    }
    loadData();
  }, [props.title, props.match.params.id]);

  const readmore = (index, res) => {
    props.history.push({
      pathname: `/readmore/${encodeURIComponent(res.title)}`,
      state: {
        content: data.Data,
        index: index
      }
    });
  };


  return (
    <div id="container" style={{backgroundColor:'#f2f5ff'}}>
      

        {data.loading ? <Spinner className="loader" animation="border" variant="primary" /> : data.Data.map((res, index) => {
          return (
            <Fade left>
              

              <div className="cardContainer" id="card" key={index} style={{backgroundColor:'white'}}>

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


                  <button
                    className="readmorebtn"
                    variant="outline-primary"
                    size="lg"
                    onClick={() => readmore(index, res)}
                  >
                  Readmore
              </button>

                
              </div>
              </div> 
              
              </Fade>
          );
        })}
     
    </div>
    
  );
}
export default withRouter(Card);

