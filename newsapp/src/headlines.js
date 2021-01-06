import React from 'react';


  const Headline = ()=>{
    const sessionHeading = ()=>sessionStorage.getItem('newsHeading');
    let textHeading=sessionHeading?`your news on ${sessionHeading}`:'News for you';
    
    return (
        <div>
            <h4>{textHeading}</h4>
        </div>
    )

}
export default Headline ;