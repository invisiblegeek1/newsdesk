import React from 'react';

export const Foot = () => {
    const Style = {
        position: "relative",
        bottom: 0,
        textAlign: "center",

    }
    const fontStyle={
        ...Style,
        fontSize:"30px",
        margin:"10px"
        


    }
    return (
        <footer style={Style}>
            <h2>Developed by an amazing people</h2> 
            <div style={fontStyle}>
                <a style={{margin:"10px"}} href="https://github.com/invisiblegeek1"><i class="fab fa-github"></i></a>
                <a style={{margin:"10px"}} href="https://www.linkedin.com/in/pushparaja15/"><i class="fab fa-linkedin"></i></a>
                <a style={{margin:"10px"}} href="https://www.instagram.com/invisible__geek/"><i class="fab fa-instagram"></i></a>
                <a style={{margin:"10px"}} href="https://twitter.com/PushparajaEngg"><i class="fab fa-twitter"></i></a>
                </div>
        </footer>
    )
}
