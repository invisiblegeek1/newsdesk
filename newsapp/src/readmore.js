import React from 'react';
import {withRouter} from 'react-router-dom';
import './readmore.css';

const Readmore=(props)=>{
    const input=props.location.data;
    let inx=props.location.index;
  
    
    return (
        <div className="readmore-container" key={inx}>
        <div className="readmoreimageContainer"><img className="image" src={input[inx].urlToImage} alt="" /></div>    
        
        <h1 id='heading'>{input[inx].title}</h1><hr></hr>
        
        <div className="content">{input[inx].content.split("[+")[0]}</div>
        
        </div>
    )

}
export default  withRouter(Readmore);