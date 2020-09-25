import React from 'react';
import {withRouter} from 'react-router-dom';
import './readmore.css';

const Readmore=(props)=>{
    const input=props.location.data;
    
    return (
        <div className="readmore-container">
        <div className="readmoreimageContainer"><img className="image" src={input.image} alt="" /></div>    
        
        <h1 id='heading'>{input.title}</h1><hr></hr>
        
        <div className="content">{input.content}</div>
        </div>
    )

}
export default  withRouter(Readmore);