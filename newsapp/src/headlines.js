import React from 'react';


  const Headline = (props)=>{
    let sessionHeading = ()=>sessionStorage.getItem('newsHeading');
    console.log(sessionHeading())
    let textHeading=sessionHeading?`your news on ${sessionHeading()}`:'News for you';
    
    return (
        <div>
            <h4 style={{color:props.Style.TextColor}}>{textHeading}</h4>
        </div>
    )

}
export default Headline ;