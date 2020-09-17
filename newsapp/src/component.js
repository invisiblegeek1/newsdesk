import React,{useState,useEffect} from 'react';
import "./component.css";
import Data from "./data";
export const Card=(props)=>{
  
  const [data,dataHandler] = useState([Data])
  useEffect(()=>{
    // async function loadData(){
    // fetch(`https://newszapp.herokuapp.com/${props.title?props.title:null}`)
    //   .then(response=>response.json())
    //   .then(res =>{console.log(res.articles)
    //   dataHandler(res.articles)} )
    //   .catch((error)=>console.log(error));}
    // loadData();
  }, [])

  return (
    <div className="cardCcontainer">
    {
    Data? Data.map(res=>{
      return (
       <div className="cardContainer" id="card">
    <div className="imageContainer" id="photocontainer"><img className="image" id="photo" src={res.urlToImage} alt="" />
    </div>
    <p className="title">{res.title}</p>
    
    
    <div className="article">
    <p>{res.description}</p>
    <button className="readmore">Read more</button></div>
    
    </div>
        
        
      )
    }) :null}
   

    </div>
  );

}


