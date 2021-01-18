import React, { useState, useEffect } from "react";
import "./component.css";
import { withRouter } from "react-router-dom";
//import Data from './data';
import Fade from 'react-reveal/Fade'
import { Spinner } from 'react-bootstrap';





function Card(props) {
  const [data, dataHandler] = useState({ loading: true });
  const [title,titleHandler]=useState(`news for you`);
  

  useEffect(() => {
    async function loadData() {
      titleHandler(props.match.params.id
        ? `your search results for ${props.match.params.id}`
        : `your top ${props.title} news`);
      let url = () => {
        
      
      
        return props.match.params.id
          ? `search/${props.match.params.id}`
          : props.title;
          
      }
      
      
      
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
  }, [props.title, props.match.params.id,title]);

  const readmore = (index, res) => {
    props.history.push({
      pathname: `/readmore/${encodeURIComponent(res.title)}`,
      state: {
        content: data.Data,
        index: index
      }
    });
  };

  const ImgUrlValidater = (ImageUrl)=>{
    return  ImageUrl.includes("http://")
      ? ImageUrl.replace("http://", "https://")
      : ImageUrl;
  }


  return (
    
    <div id="container" style={{backgroundColor:props.Style.ContainerColor}}>
    <div className="headingContainer" style={{color:props.Style.TextColor}}>{title}</div> 
      <div className="cardOuterContainer" style={{backgroundColor:props.Style.ContainerColor}}>
        {data.loading ? <Spinner className="loader" animation="border" variant="primary" /> : data.Data.map((res, index) => {
          return (
            <Fade left>
              

              <div className="cardContainer" id="card" key={index} style={{backgroundColor:props.Style.CardColor}}>

                <div className="imageContainer" id="photocontainer">
                  <img
                    className="image"
                    id="photo"
                    onError={(e) => (e.target.src = "/mylogo1.png")}
                    src={ImgUrlValidater( res.urlToImage
                      ? res.urlToImage
                      : "/mylogo1.png")
                     
                    }

                    alt=""
                  />
                </div>
                
                <div className="title-container">
                  <p className="title" style={{color:props.Style.TextColor}}>
                    {res.title.replace(/^(.{50}[^\s]*).*/, "$1") + "..."}
                  </p>


                  <button

                    className="readmorebtn"
                    style={{
                        backgroundColor:props.Style.navBarColor,
                        color: "white",
            
                      }}
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
    </div>
    
  );
}
export default withRouter(Card);

