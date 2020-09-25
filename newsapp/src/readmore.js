import React,{useState} from 'react';
import withRouter from 'react-router-dom'

const Readmore(props)=>{
    const [inx,indexHandler]=useState(props.location.data.index)
    return (
        <div></div>
    )

}
export default  withRouter(Readmore);