import React from 'react';

export const Foot = ()=>{
    const Style={
        position:"relative",
        bottom:0,
        textAlign: "center",
        
    }
    return(
        <footer style={Style}>
            <h2>Developed by an amazing people <a href="https://github.com/invisiblegeek1"><i class="fab fa-github"></i></a></h2>
        </footer>
    )
}
