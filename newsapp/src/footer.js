import React from 'react';
import './footer.css'

export const Foot = (props) => {
    
    return (
        <footer className="footerContainer" style={{backgroundColor:props.Style.ContainerColor,color:props.Style.TextColor}} >
            <p>Developed by an amazing people</p> 
            <div className="IconContainer" >
                <a style={{margin:"0 10px 0 10px"}} href="https://github.com/invisiblegeek1"><i class="fab fa-github"></i></a>
                <a style={{margin:"0 10px 0 10px"}} href="https://www.linkedin.com/in/pushparaja15/"><i class="fab fa-linkedin"></i></a>
                <a style={{margin:"0 10px 0 10px"}} href="https://twitter.com/PushparajaEngg"><i class="fab fa-twitter"></i></a>
                </div>
        </footer>
    )
}
