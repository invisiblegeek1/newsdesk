import React from 'react';
import './footer.css'

export const Foot = () => {
    
    return (
        <footer className="footerContainer" >
            <p>Developed by an amazing people</p> 
            <div className="IconContainer" >
                <a style={{margin:"10px"}} href="https://github.com/invisiblegeek1"><i class="fab fa-github"></i></a>
                <a style={{margin:"10px"}} href="https://www.linkedin.com/in/pushparaja15/"><i class="fab fa-linkedin"></i></a>
                <a style={{margin:"10px"}} href="https://twitter.com/PushparajaEngg"><i class="fab fa-twitter"></i></a>
                </div>
        </footer>
    )
}
