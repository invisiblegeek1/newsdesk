import React from 'react';


  const Headline = ()=>{
    let sessionHeading = ()=>sessionStorage.getItem('newsHeading');
    console.log(sessionHeading())
    let textHeading=sessionHeading?`your news on ${sessionHeading()}`:'News for you';
    
    return (
        <div>
            <h4>{textHeading}</h4>
        </div>
    )

}
export default Headline ;