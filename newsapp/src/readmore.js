import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import './readmore.css';

const Readmore=(props)=>{
    const [input,inputHandler]=useState(props.location.data)
    
    return (
        <div className="readmore-container">
        <div className="readmoreimageContainer"><img className="image" src={input.image} alt="" /></div>    
        
        <h3 >{input.title}</h3>
        
        <div className="content">{input.content}</div>
        </div>
    )

}
export default  withRouter(Readmore);